import axios from 'axios'

const instance = axios.create({
  // 基础请求配置
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截
instance.interceptors.request.use((config) => {
  // Do something before request is sent

  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// 返回结果拦截
instance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
