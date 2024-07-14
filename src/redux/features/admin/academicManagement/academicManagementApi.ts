import { baseApi } from '../../../api/baseApi';

export const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/semesters',
        method: 'GET',
      }),
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
