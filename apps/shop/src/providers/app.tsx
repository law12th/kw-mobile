import { AuthProvider, queryClient } from "@/lib";
import { QueryClientProvider } from "react-query";

type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	);
};

export default AppProvider;
