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
    // getAllSemesters: builder.query({
    //   query: (queryParams: IQueryParam[]) => {
    //     const params = new URLSearchParams();

    //     if (queryParams) {
    //       queryParams.forEach(({ key, value }) =>
    //         params.append(key, value.toString())
    //       );
    //     }

    //     return {
    //       url: '/academic-semesters',
    //       method: 'GET',
    //       params,
    //     };
    //   },
    //   transformResponse: (res: ISuccessResponse<IAcademicSemester[]>) =>
    //     res.data,
    // }),
  }),
});

export const {
  useCreateSemesterRegistrationMutation,
  // useGetAllSemestersQuery,
} = courseManagementApi;
