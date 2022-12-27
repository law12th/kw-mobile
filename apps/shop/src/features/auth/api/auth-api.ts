import { BASE_URL } from "@/constants";
import axios from "axios";

const authApi = axios.create({
	baseURL: `${BASE_URL}/auth`,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

export default authApi;
