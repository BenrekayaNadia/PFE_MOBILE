import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Example: undefined;
	SplashScreen:undefined;
	WelcomeScreen:undefined;
	RegisterScreen:undefined;
	LoginScreen:undefined;
	ForgotPasswordScreen:undefined;
	PricingScreen:undefined;
	DashboardScreen: {
		data?: {
		  email: string;
		  password: string;
		};
	  };
	};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

