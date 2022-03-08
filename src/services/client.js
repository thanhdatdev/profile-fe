import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.PUBLIC_API_ENDPOINT ||
    'https://thanhdatdev-profile-be.herokuapp.com',
  timeout: 60000,
  withCredentials: true,
  // headers: { 'X-Custom-Header': 'foobar' }
});

axiosInstance.interceptors.response.use(
  (response) =>
    // Do something with response data
    response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);
