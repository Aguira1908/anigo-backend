import { Exclude } from 'class-transformer';
export class UserEntity {
  id: string;
  username: string;
  role: string;
  createdAt: Date;

  @Exclude()
  password?: string;
}
