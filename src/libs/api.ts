import axios from "axios";

export const api = axios.create({
  baseURL: "https://rnd-assist.rj.r.appspot.com/",
});
