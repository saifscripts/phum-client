import { IBloodGroup, IGender, IUser, IUserName } from './user.interface';

export interface IAdmin {
  _id: string;
  id: string;
  user: IUser;
  name: IUserName;
  fullName: string;
  designation: string;
  gender: IGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: IBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
}
