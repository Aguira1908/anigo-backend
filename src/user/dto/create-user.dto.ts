import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  username: string;

  @IsString()
  @IsOptional()
  role?: string;
}
