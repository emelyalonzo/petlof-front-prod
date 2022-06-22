import axios from "axios";

const apiKey = "localhost:3001";
const endpoint = "user";
const baseURL = `http://${apiKey}/${endpoint}`;
const api = axios.create({
    baseURL,
});

const add = (data) => api.post(data);

const get = () => api.get();

const edit = () => api.put(`/edit`);

const getUser = (id) => api.get(id);

const getGendered = (gender_identity) => api.get(gender_identity);

export { add, get, edit, getUser, getGendered };
