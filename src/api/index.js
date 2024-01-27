import axios from "axios";

export const AuthInstance = axios.create({
  baseURL: "https://apiv2.mycut4cut.click",
  timeout: 10000
});
