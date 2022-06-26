import axios from "axios";

const apiKey = "localhost:3001";
const endpoint = "match";
const baseURL = `http://${apiKey}`;
const api = axios.create({
    baseURL,
});

const add = (userId, matchedUserId) => api.put(`/${endpoint}/addmatch`, { userId, matchedUserId})

const get = (matchedUserIds) => api.get(`/${endpoint}`, {params: {userIds: JSON.stringify(matchedUserIds)}})

export { add , get};
