import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

//AUTH
export const signUp = (email, password) => API.post("/auth/signup", { email, password });
export const logIn = (email, password) => API.post("/auth/login", { email, password });

//WORKERS
export const addWorker = (data) => API.post("/workers/add", { ...data });
export const editWorker = (data) => API.post("/workers/edit", { ...data });
export const getAllWorkers = () => API.get("/workers/getAll");
export const getWorkerById = ({ workerId }) => API.get(`/workers/getById?workerId=${workerId}`);

//roles
export const getAllRoles = () => API.get(`/roles/getAll`);
