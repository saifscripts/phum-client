import { IFaculty } from './faculty.interface';

export interface IPreRequisiteCourses {
  course: string;
  isDeleted: boolean;
}

export interface ICourse {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: [IPreRequisiteCourses];
}

export interface ICourseFaculty {
  course: string;
  faculties: IFaculty[];
}
