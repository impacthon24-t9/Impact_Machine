import axios from "axios";

export const AuthInstance = axios.create({
  baseURL: "https://api.mycut4cut.click",
  timeout: 10000
});
