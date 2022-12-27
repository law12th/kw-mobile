import {
	GoogleSignin,
	statusCodes,
} from "@react-native-google-signin/google-signin";

export const googleLogin = async () => {
	try {
		await GoogleSignin.hasPlayServices();

		const userInfo = await GoogleSignin.signIn();

		return userInfo;
	} catch (error) {
		//@ts-ignore
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			//@ts-ignore
		} else if (error.code === statusCodes.IN_PROGRESS) {
			//@ts-ignore
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// play services not available or outdated
		} else {
			// some other error happened
		}
	}
};
