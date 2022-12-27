import { BASE_URL } from "@/constants";
import axios from "axios";

const authApi = axios.create({
	baseURL: `${BASE_URL}/auth`,
});

export default authApi;
