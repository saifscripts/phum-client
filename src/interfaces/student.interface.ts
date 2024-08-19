import { BloodGroups } from '../constants';
import { IAcademicDepartment } from './academicDepartment.interface';
import { IAcademicSemester } from './academicSemester.interface';
import { IGender, IUser, IUserName } from './user.interface';

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IStudent {
  _id: string;
  id: string;
  user: IUser;
  name: IUserName;
  fullName: string;
  gender: IGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: (typeof BloodGroups)[number];
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  admissionSemester: IAcademicSemester;
  academicDepartment: IAcademicDepartment;
  academicFaculty: string;
  isDeleted: boolean;
}
