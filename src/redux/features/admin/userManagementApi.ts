import { IQueryParam, IStudent, ISuccessResponse } from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: '/users/create-student',
        method: 'POST',
        body: data,
      }),
    }),
    getAllStudents: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) => params.append(key, value));
        }

        return {
          url: '/students',
          method: 'GET',
          params,
        };
      },
      transformResponse: (res: ISuccessResponse<IStudent[]>) => res.data,
    }),
  }),
});

export const { useCreateStudentMutation, useGetAllStudentsQuery } =
  userManagementApi;
