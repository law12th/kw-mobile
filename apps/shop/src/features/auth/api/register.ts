import { RegisterCredentialsDTO } from "../types";
import authApi from "./auth-api";

export const register = async (credentials: RegisterCredentialsDTO) => {
	const response = await authApi.post("/register", credentials);

	return response.data;
};
