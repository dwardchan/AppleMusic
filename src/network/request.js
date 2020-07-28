import axios from 'axios'

export function request(config) {
  //创建axios的实例
  const install = axios.create({
    baseURL: 'http://localhost:3000',
    timeOut: 5000
  })
  //请求拦截的作用
  install.interceptors.request.use(data => {
    return data
  }, err => {
    return err
  })
  //拦截响应
  install.interceptors.response.use(data => {
    return data
  }, err => {
    return err
  });
  //发送真正的网络请求
  return install(config);
}