import { BASE_URL } from "@/app/contants/baseurl";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api