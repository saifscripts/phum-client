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
  }),
});

export const { useCreateStudentMutation } = userManagementApi;
