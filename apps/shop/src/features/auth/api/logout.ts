import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const googleSignOut = async () => {
	try {
		await GoogleSignin.signOut();
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		}

		console.error(err);
	}
};
