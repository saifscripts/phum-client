import { IAcademicSemester } from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query<IAcademicSemester[], string>({
      query: () => ({
        url: '/semesters',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
