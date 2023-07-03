import { User } from '../../users/entities/user.entity';

export class AuthResponse {
  token: string;

  user: User;
}
