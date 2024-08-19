import { BloodGroups, Genders, USER_ROLE, UserStatus } from '../constants';

export interface IDecodedUser {
  id: string;
  role: keyof typeof USER_ROLE;
  iat: number;
  exp: number;
}

export type IUserStatus = (typeof UserStatus)[number];

export interface IUserName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export type IGender = (typeof Genders)[number];

export type IBloodGroup = (typeof BloodGroups)[number];

export interface IUser {
  _id: string;
  id: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'superAdmin' | 'admin' | 'student' | 'faculty';
  status: IUserStatus;
  isDeleted: boolean;
}
