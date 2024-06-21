import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
  },
});
