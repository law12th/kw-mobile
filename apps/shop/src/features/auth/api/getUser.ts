import { GoogleSignin } from "@react-native-google-signin/google-signin";
import authApi from "./auth-api";

export const googleGetCurrentUser = async () => {
	const currentUser = await GoogleSignin.getCurrentUser();

	return currentUser;
};

export const getUser = async () => {
	const currentUser = await authApi.get("/user");

	return currentUser.data;
};
