import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@/theme';
import type { ApplicationStackParamList } from '@/types/navigation';
import SplashScreen from '@/screens/SplashScreen/SplashScreen';
import WelcomeScreen from '@/screens/WelcomeScreen/WelcomeScreen';
import RegisterScreen from '@/screens/RegisterScreen/RegisterScreen';
import LoginScreen from '@/screens/LoginScreen/LoginScreen';
//import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import PricingScreen from '@/screens/PricingScreen/PricingScreen';
//import DashboardScreen from '@/screens/DashboardScreen/DashboardScreen';
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen.tsx/ForgotPasswordScreen';
import DashboardScreen from '@/screens/DashboardScreen.tsx/DashboardScreen';
import ListOfTraineesRequests from '@/screens/RequestListScreen/RequestListScreen';
import NotificationScreen from '@/screens/NotificationsScreen/NotificationScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigatorCoach from '@/tabs/TabNavigatorCoach';
import ChatScreen from '@/screens/ChatScreen/ChatScreen';
import TabNavigatorTrainee from '@/tabs/TabNavigatorTrainee';
import CoachListScreen from '@/screens/CoachListScreen/CoachListScreen';
import PersonalInfoScreen from '@/screens/PersonalInfoScreen/PersonalInfoScreen';
import ProfileScreen from '@/screens/ProfileScreen/ProfileScreen';
import ChangePasswordScreen from '@/screens/ChangePasswordScreen/ChangePasswordScreen';

import ExerciceScreen from '@/screens/ExerciceScreen/ExerciceScreen';
import ChatRoomScreen from '@/screens/ChatRoomScreen/ChatRoomScreen';
import WorkoutTraineeScreen from '@/screens/WorkoutScreen/workoutTraineeScreen';
import CoachExerciseScreen from '@/screens/ExerciceScreen/CoachExerciceScreen';


const Stack = createStackNavigator<ApplicationStackParamList>();


function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator  initialRouteName="SplashScreen" key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
				<Stack.Screen name="TabNavigatorCoach" component={TabNavigatorCoach} />
				<Stack.Screen name="TabNavigatorTrainee" component={TabNavigatorTrainee} />
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
				<Stack.Screen name="PricingScreen" component={PricingScreen} />
				<Stack.Screen name="DashboardScreen" component={DashboardScreen} />
				<Stack.Screen name="ListOfTraineesRequests" component={ListOfTraineesRequests} />
				<Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen}/>
				<Stack.Screen name="ChatScreen" component={ChatScreen}/>
				<Stack.Screen name="CoachListScreen" component={CoachListScreen}/>
				<Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
				<Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen}/>
				<Stack.Screen name="ExerciceScreen" component={ExerciceScreen}/>
				<Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen}/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;

