import {
  IAcademicSemester,
  IQueryParam,
  ISuccessResponse,
} from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) => params.append(key, value));
        }

        return {
          url: '/semesters',
          method: 'GET',
          params,
        };
      },
      transformResponse: (res: ISuccessResponse<IAcademicSemester[]>) =>
        res.data,
    }),
    createSemester: builder.mutation({
      query: (data) => ({
        url: '/semesters/create-semester',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useCreateSemesterMutation } =
  academicManagementApi;
