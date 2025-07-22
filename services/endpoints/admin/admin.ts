import { api } from '../../api';
import {
  AdminAttributesLoginParamsType,
  AdminAttributesResponse,
} from './types';

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      AdminAttributesResponse,
      Partial<AdminAttributesLoginParamsType>>({
      query: (newUser) => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
   
  }),
});

export const {
  useLoginUserMutation,
} = adminApi;
