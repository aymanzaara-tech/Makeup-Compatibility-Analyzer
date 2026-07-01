import axios from "axios";

const API = "http://localhost:5000/api/products";

export const getBackendStatus = async () => {
    const response = await axios.get(`${API}/test`);
    return response.data;
};