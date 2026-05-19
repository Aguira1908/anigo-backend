import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
import * as crypto from 'crypto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AuthService {
  constructor(
    private readonly logger: PinoLogger,
    private userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(AuthService.name);
  }

  private async clearAuthCache(hashedToken: string) {
    await this.cacheManager.del(`refresh_token:${hashedToken}`);
    this.logger.info(
      `Cache invalidation for key: refresh_token:${hashedToken}`,
    );
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = await argon2.hash(registerDto.password);

    return this.userService.create({
      ...registerDto,
      password: hashedPassword,
    });
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: loginDto.username },
    });

    if (!user || !(await argon2.verify(user.password, loginDto.password))) {
      throw new UnauthorizedException('Username atau password salah');
    }

    return this.generateTokens(user.id);
  }

  async refreshTokens(refreshToken: string) {
    const hashedToken = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const userId = await this.cacheManager.get<string>(
      `refresh_token:${hashedToken}`,
    );

    if (!userId) {
      throw new UnauthorizedException(
        'Refresh token tidak valid atau sudah kadaluarsa',
      );
    }

    // Refresh Token Rotation: Hapus token lama
    await this.clearAuthCache(hashedToken);

    // Terbitkan token baru (Access & Refresh token baru)
    return this.generateTokens(userId);
  }

  async revokeToken(refreshToken: string) {
    const hashedToken = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');
    await this.clearAuthCache(hashedToken);
  }

  private async generateTokens(userId: string) {
    // Generate JWT (Umur pendek: 15 menit)
    const accessToken = this.jwtService.sign(
      { sub: userId },
      { secret: process.env.JWT_SECRET || 'super-secret', expiresIn: '15m' },
    );

    // Generate Opaque Token (Umur panjang: 7 hari)
    const rawRefreshToken = crypto.randomBytes(32).toString('hex');

    // Gunakan SHA-256 untuk refresh token (bukan argon2).
    // Karena raw token sudah memiliki entropi sangat tinggi (random 32 byte),
    // dictionary attack tidak mungkin terjadi. SHA-256 mempercepat pencarian di DB.
    const hashedRefreshToken = crypto
      .createHash('sha256')
      .update(rawRefreshToken)
      .digest('hex');

    // Simpan ke Redis dengan TTL 7 hari (dalam milidetik)
    const ttl = 7 * 24 * 60 * 60 * 1000;
    await this.cacheManager.set(
      `refresh_token:${hashedRefreshToken}`,
      userId,
      ttl,
    );

    return { accessToken, refreshToken: rawRefreshToken };
  }
}
