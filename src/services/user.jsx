import axios from "axios";

const apiKey = "localhost:3001";
const endpoint = "users";
const baseURL = `http://${apiKey}`;
const api = axios.create({
    baseURL,
});

const add = (data) => api.post(`/${endpoint}`, data)


const get = () => api.get();

const edit = (formData) => api.put(`/${endpoint}/edit`, formData)

const getUser = (id) => api.get(id);

const getGendered = (gender_identity) => api.get(gender_identity);

export { add, get, edit, getUser, getGendered };
