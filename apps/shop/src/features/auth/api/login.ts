import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { LoginCredentialsDTO, UserResponse } from "../types";
import authApi from "./auth-api";

export const googleSignIn = async (): Promise<User> => {
	await GoogleSignin.hasPlayServices();

	const userInfo = await GoogleSignin.signIn();

	return userInfo;
};

export const login = async (
	credentials: LoginCredentialsDTO
): Promise<UserResponse> => {
	const response = await authApi.post("/login", credentials);

	return response.data;
};
