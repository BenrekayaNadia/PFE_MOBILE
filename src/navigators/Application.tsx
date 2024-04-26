import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Startup } from '@/screens';
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
const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator  initialRouteName="SplashScreen" key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Example" component={Example} />
				<Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
				<Stack.Screen name="PricingScreen" component={PricingScreen} />
				<Stack.Screen name="DashboardScreen" component={DashboardScreen} />

				

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
//<Stack.Screen name="DashboardScreen" component={DashboardScreen} />
