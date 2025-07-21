import axios from "axios";

export const baseUrl = 'http://localhost:5000';

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true
});


export const get = (url, params) => instance.get(url, params);
export const post = (url, data) => instance.post(url, data)
export const patch = (url, data) => instance.patch(url, data)
export const del = (url) => instance.delete(url)

