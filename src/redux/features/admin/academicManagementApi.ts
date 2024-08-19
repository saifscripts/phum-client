import {
  IAcademicDepartment,
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
          queryParams.forEach(({ key, value }) => params.append(key, value));
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
    getAllAcademicDepartments: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) => params.append(key, value));
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
  useGetAllAcademicDepartmentsQuery,
} = academicManagementApi;
