import axios from "axios";

export const api = axios.create({
  baseURL: "https://rnd-feedbacks.vercel.app/",
});