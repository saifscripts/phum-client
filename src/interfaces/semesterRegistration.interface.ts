import { SemesterStatus } from '../constants';
import { IAcademicSemester } from './academicSemester.interface';

export type ISemesterStatus = keyof typeof SemesterStatus;

export interface ISemesterRegistration {
  _id: string;
  academicSemester: IAcademicSemester;
  status: ISemesterStatus;
  startDate: Date;
  endDate: Date;
  minCredit: number;
  maxCredit: number;
}
