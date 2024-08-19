import { BloodGroups, Genders } from '../constants';

export interface IUserName {
  firstName: string;
  middleName: string;
  lastName: string;
}

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
  user: string;
  name: IUserName;
  fullName: string;
  gender: (typeof Genders)[number];
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
  admissionSemester: string;
  academicDepartment: string;
  academicFaculty: string;
  isDeleted: boolean;
}
