
import ChatScreen from "@/screens/ChatScreen/ChatScreen";
import CoachListScreen from "@/screens/CoachListScreen/CoachListScreen";
import DashboardScreen from "@/screens/DashboardScreen.tsx/DashboardScreen";
import NotificationScreen from "@/screens/NotificationsScreen/NotificationScreen";
import PricingScreen from "@/screens/PricingScreen/PricingScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon  from "react-native-vector-icons/Ionicons"; 
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native";
import { ApplicationScreenProps } from "@/types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthService from "@/services/AuthService";
import { logout } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/hooks";
import PersonalInfoScreen from "@/screens/PersonalInfoScreen/PersonalInfoScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import ExerciceScreen from "@/screens/ExerciceScreen/ExerciceScreen";

import WorkoutTraineeScreen from "@/screens/WorkoutScreen/workoutTraineeScreen";
import WorkoutScreen from "@/screens/WorkoutScreen/workoutScreen";
const Tab = createBottomTabNavigator();

function TabNavigatorTrainee() {
  const dispatch  = useAppDispatch();
   const handleLogout = async (navigation: ApplicationScreenProps['navigation']) => {
     try{
       await AuthService.removeToken();
          dispatch(logout()); 
       navigation.navigate("LoginScreen");
     } catch (error) {
       console.log("error occured during logout:",error);
     }
  } 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            display: "flex",
            paddingTop: 10,
            paddingBottom: 10,
            height: 70,
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            elevation: 10,
          },
          null,
        ],
        tabBarActiveTintColor: "#CC8FED",
        tabBarInactiveTintColor: "#A9A9A9",
      }}
    >
     {/*  <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={24} color={color} />
          ),
          tabBarAccessibilityLabel: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: {  fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        }}
      /> */}
      <Tab.Screen
        name="ProgramScreen"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({ color}) => (
            <FontAwesome6 name="dumbbell" size={25} color={color} />
          ),
          headerShown : false,
          tabBarAccessibilityLabel: "CoachListScreen",
          tabBarLabel: "Workout",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        }}
      />
      
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-ellipses-outline" size={28} color={color} />
          ),
          headerShown : false,
          tabBarAccessibilityLabel: "ChatScreen",
          tabBarLabel: "Chat",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        }}
      />
      <Tab.Screen
        name="CoachList"
        component={CoachListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box-multiple-outline" size={28} color={color} />
          ),
          headerShown : false,
          tabBarAccessibilityLabel: "CoachList",
          tabBarLabel: "Coachs",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        }}
      />
     <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={({route}) =>({
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" size={28} color={color} />
          ),
          headerShown : false,
          tabBarAccessibilityLabel: "RequestList",
          tabBarLabel: "Notification",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color={color}
            />
          ),
          headerShown : false,
          tabBarAccessibilityLabel: "ProfileScreen",
          tabBarLabel: "Profile",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },

       /*    headerRight: () => (
            <TouchableOpacity
              onPress={() => handleLogout(navigation)} // Pass navigation prop to handleLogout function
              style={{ marginRight: 10 }}
            >
              <Icon name="log-out-outline" size={25} color="#CC8FED" />
            </TouchableOpacity>
          ), */
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigatorTrainee;