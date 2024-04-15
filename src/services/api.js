import axios from "axios";

const api = axios.create({
    baseURL: `https://gnews.io/api/v4/top-headlines`,
    params: {
        category: "general",
        lang: "pt",
        country: "br",
        apikey: "ae7fd4b6aece6fb8f395767a6779dd9c",
    },
});

export default api;
