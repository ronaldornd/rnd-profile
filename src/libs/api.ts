import axios from 'axios';

export const api = axios.create({
    baseURL: "https://rnd-server-u8pb.onrender.com",
})