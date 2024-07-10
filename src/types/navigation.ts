import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	SplashScreen:undefined;
	WelcomeScreen:undefined;
	RegisterScreen:undefined;
	TabNavigatorCoach:undefined;
	TabNavigatorTrainee:undefined;
	LoginScreen:undefined;
	ForgotPasswordScreen:undefined;
	PricingScreen:undefined;
	ListOfTraineesRequests:undefined;
	NotificationScreen:undefined;
	PersonalInfoScreen:undefined;
	ProfileScreen:undefined;
	ChatScreen:undefined;
	CoachListScreen:undefined;
	ChangePasswordScreen:undefined;
	workoutScreen:undefined;
	ExerciceScreen:undefined;
	ChatRoomScreen:undefined;
	DashboardScreen: {
		data?: {
		  email: string;
		  password: string;
		};
	  };
	};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

