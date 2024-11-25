import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

//AUTH
export const signUp = (email, password) => API.post("/auth/signup", { email, password });
export const logIn = (email, password) => API.post("/auth/login", { email, password });

//WORKERS
export const addWorker = (data) => API.post("/workers/add", { ...data });
