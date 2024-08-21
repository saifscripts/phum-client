import {
  IQueryParam,
  ISemesterRegistration,
  ISemesterStatus,
  ISuccessResponse,
} from '../../../interfaces';
import { ICourse, ICourseFaculty } from '../../../interfaces/course.interface';
import { baseApi } from '../../api/baseApi';

export const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: '/semester-registrations/create-semester-registration',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['SemesterRegistration'],
    }),

    getAllRegisteredSemesters: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/semester-registrations',
          method: 'GET',
          params,
        };
      },
      providesTags: ['SemesterRegistration'],
      transformResponse: (res: ISuccessResponse<ISemesterRegistration[]>) => {
        return { registeredSemesters: res.data, meta: res.meta };
      },
    }),

    updateSemesterRegistration: builder.mutation<
      ISuccessResponse<ISemesterRegistration>,
      { id: string; data: { status: ISemesterStatus } }
    >({
      query: (data) => ({
        url: `/semester-registrations/${data.id}`,
        method: 'PATCH',
        body: data.data,
      }),
      invalidatesTags: ['SemesterRegistration'],
    }),

    createCourse: builder.mutation({
      query: (data) => ({
        url: '/courses/create-course',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Course'],
    }),

    getAllCourses: builder.query({
      query: (queryParams: IQueryParam[]) => {
        const params = new URLSearchParams();

        if (queryParams) {
          queryParams.forEach(({ key, value }) =>
            params.append(key, value.toString())
          );
        }

        return {
          url: '/courses',
          method: 'GET',
          params,
        };
      },
      providesTags: ['Course'],
      transformResponse: (res: ISuccessResponse<ICourse[]>) => {
        return { courses: res.data, meta: res.meta };
      },
    }),

    updateCourse: builder.mutation<
      ISuccessResponse<ICourse>,
      { id: string; data: any }
    >({
      query: (data) => ({
        url: `/courses/${data.id}`,
        method: 'PATCH',
        body: data.data,
      }),
      invalidatesTags: ['Course'],
    }),

    getCourseFaculties: builder.query({
      query: (id) => ({
        url: `/courses/${id}/get-faculties`,
        method: 'GET',
      }),
      transformResponse: (res: ISuccessResponse<ICourseFaculty>) => res.data,
    }),

    assignCourseFaculties: builder.mutation<
      ISuccessResponse<ICourseFaculty>,
      { id: string; data: any }
    >({
      query: (data) => ({
        url: `/courses/${data.id}/assign-faculties`,
        method: 'PUT',
        body: data.data,
      }),
    }),

    createOfferedCourse: builder.mutation({
      query: (data) => ({
        url: '/offered-courses/create-offered-course',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateSemesterRegistrationMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateSemesterRegistrationMutation,
  useCreateCourseMutation,
  useGetAllCoursesQuery,
  useUpdateCourseMutation,
  useGetCourseFacultiesQuery,
  useAssignCourseFacultiesMutation,
  useCreateOfferedCourseMutation,
} = courseManagementApi;
