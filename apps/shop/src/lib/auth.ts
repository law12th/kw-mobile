import {
	AuthUser,
	getUser,
	login,
	LoginCredentialsDTO,
	register,
	RegisterCredentialsDTO,
	UserResponse,
} from "@/features/auth";
import { initReactQueryAuth } from "react-query-auth";

async function handleUserResponse(response: UserResponse) {
	return response.user;
}

async function loadUser() {
	const user = await getUser();

	return user;
}

async function loginFn(credentials: LoginCredentialsDTO) {
	const response = await login(credentials);

	const user = await handleUserResponse(response);

	return user;
}

async function registerFn(credentials: RegisterCredentialsDTO) {
	const response = await register(credentials);

	const user = await handleUserResponse(response);

	return user;
}

async function logoutFn() {}

const authConfig = {
	loadUser,
	loginFn,
	registerFn,
	logoutFn,
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
	AuthUser | null,
	unknown,
	LoginCredentialsDTO,
	RegisterCredentialsDTO
>(authConfig);
