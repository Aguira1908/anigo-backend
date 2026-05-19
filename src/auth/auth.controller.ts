import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import type { Request, Response } from 'express';
import { ApiResponse } from '../common/dto/api-response.dto';
import { AuthEntity } from './entities/auth.entities';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    const authEntity = new AuthEntity();
    authEntity.id = user.id;
    authEntity.username = user.username;

    return new ApiResponse<AuthEntity>(authEntity, 'Successfully registered');
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.login(loginDto);

    this.setCookies(res, tokens.accessToken, tokens.refreshToken);

    return new ApiResponse(null, 'Successfully logged in');
  }

  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    const tokens = await this.authService.refreshTokens(refreshToken);

    this.setCookies(res, tokens.accessToken, tokens.refreshToken);

    return new ApiResponse(null, 'Successfully refreshed tokens');
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies['refreshToken'];

    // 1. Hapus token dari database jika ada
    if (refreshToken) {
      await this.authService.revokeToken(refreshToken);
    }

    // 2. Bersihkan cookie di browser
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    return new ApiResponse(null, 'Successfully logged out');
  }

  private setCookies(res: Response, accessToken: string, refreshToken: string) {
    const isProduction = process.env.NODE_ENV === 'production';

    // Set Access Token (15 Menit)
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 15 * 60 * 1000,
    });

    // Set Refresh Token (7 Hari)
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }
}
