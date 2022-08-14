import axios from "axios";
// 创建axios实例
const service = axios.create({
  // 服务接口请求
  baseURL: "http://127.0.0.1:8888",
  // 超时设置
  timeout: 15000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

export default service;
