import {
  IQueryParam,
  ISemesterRegistration,
  ISemesterStatus,
  ISuccessResponse,
} from '../../../interfaces';
import { baseApi } from '../../api/baseApi';

export const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: '/semester-registrations/create-semester-registration',
        method: 'POST',
        body: data,
      }),
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
  }),
});

export const {
  useCreateSemesterRegistrationMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateSemesterRegistrationMutation,
} = courseManagementApi;
