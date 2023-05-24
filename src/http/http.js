import axios from "axios";

export const publicApi = axios.create({
    baseURL: "https://63e61ee87eef5b22337f4289.mockapi.io"
})