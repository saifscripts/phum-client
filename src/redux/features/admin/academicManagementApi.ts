import {
  IAcademicDepartment,
  IAcademicFaculty,
  IAcademicSemester,
  IQueryParam,
  ISuccessResponse,
} from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-semester',
        method: 'POST',
        body: data,
      }),
    }),
    getAllSemesters: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/academic-semesters',
          method: 'GET',
          params,
        };
      },
      transformResponse: (res: ISuccessResponse<IAcademicSemester[]>) =>
        res.data,
    }),
    getAllAcademicFaculties: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/academic-faculties',
          method: 'GET',
          params,
        };
      },
      transformResponse: (res: ISuccessResponse<IAcademicFaculty[]>) => {
        return { academicFaculties: res.data, meta: res.meta };
      },
    }),
    getAllAcademicDepartments: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/academic-departments',
          method: 'GET',
          params,
        };
      },
      transformResponse: (res: ISuccessResponse<IAcademicDepartment[]>) =>
        res.data,
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useCreateSemesterMutation,
  useGetAllAcademicFacultiesQuery,
  useGetAllAcademicDepartmentsQuery,
} = academicManagementApi;
