import { FieldValues } from 'react-hook-form';
import {
  IAdmin,
  IFaculty,
  IQueryParam,
  IStudent,
  ISuccessResponse,
  IUserStatus,
} from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: '/users/create-student',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Student'],
    }),

    createFaculty: builder.mutation({
      query: (data) => ({
        url: '/users/create-faculty',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Faculty'],
    }),

    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/users/create-admin',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Admin'],
    }),

    changeUserStatus: builder.mutation<
      ISuccessResponse<IStudent>,
      { id: string; data: { status: IUserStatus } }
    >({
      query: (data) => ({
        url: `/users/change-status/${data.id}`,
        method: 'POST',
        body: data.data,
      }),
      invalidatesTags: ['Student', 'Faculty', 'Admin'],
    }),

    getAllStudents: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/students',
          method: 'GET',
          params,
        };
      },
      providesTags: ['Student'],
      transformResponse: (res: ISuccessResponse<IStudent[]>) => {
        return { students: res.data, meta: res.meta };
      },
    }),

    getSingleStudent: builder.query({
      query: (id: string) => ({
        url: `/students/${id}`,
        method: 'GET',
      }),
      providesTags: ['Student'],
      transformResponse: (res: ISuccessResponse<IStudent>) => res.data,
    }),

    updateStudent: builder.mutation<
      ISuccessResponse<IStudent>,
      { id: string; data: FieldValues }
    >({
      query: (data) => ({
        url: `/students/${data.id}`,
        method: 'PATCH',
        body: data.data,
      }),
      invalidatesTags: ['Student'],
    }),

    getAllFaculties: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/faculties',
          method: 'GET',
          params,
        };
      },
      providesTags: ['Faculty'],
      transformResponse: (res: ISuccessResponse<IFaculty[]>) => {
        return { faculties: res.data, meta: res.meta };
      },
    }),

    getSingleFaculty: builder.query({
      query: (id: string) => ({
        url: `/faculties/${id}`,
        method: 'GET',
      }),
      providesTags: ['Faculty'],
      transformResponse: (res: ISuccessResponse<IFaculty>) => res.data,
    }),

    updateFaculty: builder.mutation<
      ISuccessResponse<IFaculty>,
      { id: string; data: FieldValues }
    >({
      query: (data) => ({
        url: `/faculties/${data.id}`,
        method: 'PATCH',
        body: data.data,
      }),
      invalidatesTags: ['Faculty'],
    }),

    getAllAdmins: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/admins',
          method: 'GET',
          params,
        };
      },
      providesTags: ['Admin'],
      transformResponse: (res: ISuccessResponse<IAdmin[]>) => {
        return { admins: res.data, meta: res.meta };
      },
    }),

    getSingleAdmin: builder.query({
      query: (id: string) => ({
        url: `/admins/${id}`,
        method: 'GET',
      }),
      providesTags: ['Admin'],
      transformResponse: (res: ISuccessResponse<IAdmin>) => res.data,
    }),

    updateAdmin: builder.mutation<
      ISuccessResponse<IAdmin>,
      { id: string; data: FieldValues }
    >({
      query: (data) => ({
        url: `/admins/${data.id}`,
        method: 'PATCH',
        body: data.data,
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useCreateFacultyMutation,
  useCreateAdminMutation,
  useChangeUserStatusMutation,
  useGetAllStudentsQuery,
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
  useGetAllFacultiesQuery,
  useGetSingleFacultyQuery,
  useUpdateFacultyMutation,
  useGetAllAdminsQuery,
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
} = userManagementApi;
