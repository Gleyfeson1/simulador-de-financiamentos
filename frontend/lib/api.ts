import { BASE_URL } from "@/app/constants/baseurl";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api