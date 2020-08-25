import axios from "axios";

const instance = axios.create({
  baseURL: 'http://s.linweiqin.com/api/s/',
  timeout: 1000,
});

instance.interceptors.request.use(
  function (config) {
    let userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};
    let oauth_token = userInfo.oauth_token;
    if (oauth_token && config.data) {
      // 如果是 get 请求 没有data 参数
      config.data.oauth_token = oauth_token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
