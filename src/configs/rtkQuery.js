import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const instanceApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-rest-api-nodejs.herokuapp.com/', }),
  prepareHeaders: (headers, { getState }) => {
    // getState() giúp lấy ra toàn bộ state trong store
    // getState().user lấy ra state trong userSlice
    const token = getState().user?.currentUser?.token;

    // Nếu có token thì thêm vào headers
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
  endpoints: () => ({}),
})