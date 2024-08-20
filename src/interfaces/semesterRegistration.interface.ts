import { IAcademicSemester } from './academicSemester.interface';

export interface ISemesterRegistration {
  _id: string;
  academicSemester: IAcademicSemester;
  status: 'UPCOMING' | 'ONGOING' | 'ENDED';
  startDate: Date;
  endDate: Date;
  minCredit: number;
  maxCredit: number;
}
