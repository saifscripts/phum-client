import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { logout, setUser } from '../features/auth/authSlice';
import { RootState } from '../store';
import getRefreshToken from './getRefreshToken';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', token);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn = async (args, api, options) => {
  let result = await baseQuery(args, api, options);

  if (result?.error?.status === 401) {
    const token = await getRefreshToken();
    if (!token) api.dispatch(logout());

    const user = (api.getState() as RootState).auth.user;

    api.dispatch(setUser({ user, token }));

    result = await baseQuery(args, api, options);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ['Student', 'Faculty', 'Admin', 'SemesterRegistration'],
  endpoints: () => ({}),
});
