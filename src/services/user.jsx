import axios from "axios";

const apiKey = "localhost:3001";
const endpoint = "user";
const baseURL = `http://${apiKey}/${endpoint}`;
const api = axios.create({
    baseURL,
});

const add = (data) => api.post(data);

const get = () => api.get()

export { add, get };
