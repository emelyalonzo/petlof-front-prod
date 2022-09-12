import axios from "axios";

const apiKey = "localhost:3001";
const endpoint = "users";
const endpointGender = "gender";
const baseURL = `http://${apiKey}`;
const api = axios.create({
    baseURL,
});

const add = (isSignUp, data) => api.post(`/${endpoint}/${isSignUp ? "signup" : "signin"}`, data)

const edit = (formData) => api.put(`/${endpoint}/edit`, formData)

const getUser = (userId) => api.get(`/${endpoint}`, {params: {id: userId}});

const getGendered = (gender_interest) => api.get(`/${endpointGender}`,{params: {gender_identity: gender_interest}});

export { add, edit, getUser, getGendered };
