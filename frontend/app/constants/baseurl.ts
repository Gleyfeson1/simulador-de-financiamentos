
const isProd = process.env.NODE_ENV === "production";
export const BASE_URL = isProd
    ? "http://oficial"
    : "http://localhost:8080";

