import axios from 'axios';
import store from '../store';
import { baseURL } from './config';

const instance = axios.create({
  baseURL: `${baseURL}/api/`,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const state = store.getState();
    //   const token = state?.auth?.token;
    //   return {
    //     ...config,
    //     headers: { ...config.headers, Authorization: `Bearer ${token}` }
    //   };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// instance.interceptors.request.use((config) => {
//   const state = store.getState();
//   const token = state.authentication.token;
//   console.log('TOKEN', token);
//   return {
//     ...config,
//     headers: { ...config.headers, Authorization: `Bearer ${token}` }
//   };
// });
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
