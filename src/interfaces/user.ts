import { USER_ROLE } from '../constants';

export interface IDecodedUser {
  id: string;
  role: keyof typeof USER_ROLE;
  iat: number;
  exp: number;
}
