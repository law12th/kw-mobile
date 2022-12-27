export type LoginCredentialsDTO = {
	email: string;
	password: string;
};

export type RegisterCredentialsDTO = {
	username: string;
	givenName: string;
	familyName: string;
	email: string;
	password: string;
	phone: string;
	dateOfBirth: string;
};

export type AuthUser = {
	id: string;
	username: string;
	givenName: string;
	familyName: string;
	role: "USER";
};

export type UserResponse = {
	user: AuthUser;
};
