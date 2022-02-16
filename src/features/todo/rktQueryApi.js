import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { instanceApi } from '../../configs/rtkQuery'

export const api = instanceApi.injectEndpoints({
  reducerPath: "todo/login",
  // Query: Dùng để lấy dữ liệu (có thể lưu cache).
  // Mutation: Dùng để cập nhật dữ liệu (validate cache).
  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    // Tạo 1 request dạng mutation
    login: builder.mutation({
      query: (credentials) => ({
        url: `login`,
        method: 'POST',
        body: credentials,
      }),
    }),

    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
  overrideExisting: false,
})


// Export ra ngoài thành các hooks để sử dụng theo cú pháp use + endpoints (login) + endpoints type (mutation)
export const { useLoginMutation } = api;