import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { setCookie, getCookie, deleteCookie } from './Cookies';

const axiosInstance = axios.create({
  baseURL:
    process.env.PUBLIC_API_ENDPOINT ||
    'https://thanhdatdev-profile-be.herokuapp.com',
  timeout: 60000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response, (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

const decoreConfig = (config, customData) => {
  let token = typeof window !== 'undefined' && getCookie('ACCESS_TOKEN');

  if (token === false && customData?.auth_token) {
    token = customData?.auth_token || null;
  }
  const CSRFToken =
    typeof window !== 'undefined' && getCookie('CSRF-TOKEN');

  const finalizedConfig = {
    ...config,
    headers: {
      ...(token ? { Authorization: `${token}` } : {}),
      ...(CSRFToken ? { 'X-CSRF-Token': CSRFToken } : {}),
    },
  };

  return finalizedConfig;
};

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}
