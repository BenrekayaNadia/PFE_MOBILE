import ChatScreen from "@/screens/ChatScreen/ChatScreen";
import CoachListScreen from "@/screens/CoachListScreen/CoachListScreen";
import DashboardScreen from "@/screens/DashboardScreen.tsx/DashboardScreen";
import NotificationScreen from "@/screens/NotificationsScreen/NotificationScreen";
import PricingScreen from "@/screens/PricingScreen/PricingScreen";
import ListOfTraineesRequests from "@/screens/RequestListScreen/RequestListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import WorkoutTraineeScreen from "@/screens/WorkoutScreen/workoutTraineeScreen";

import ExerciceScreen from "@/screens/ExerciceScreen/ExerciceScreen";
import WorkoutScreen from "@/screens/WorkoutScreen/workoutScreen";


const Tab = createBottomTabNavigator();

function TabNavigatorCoach() {
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
      {/*    <Tab.Screen
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
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="dumbbell" size={25} color={color} />
          ),
          headerShown: false,
          tabBarAccessibilityLabel: "WorkoutScreen",
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
          headerShown: false,
          tabBarAccessibilityLabel: "ChatScreen",
          tabBarLabel: "Chat",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        }}
      />
      <Tab.Screen
        name="Requests"
        component={ListOfTraineesRequests}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box-multiple-outline"
              size={28}
              color={color}
            />
          ),
          headerShown: false,
          tabBarAccessibilityLabel: "RequestList",
          tabBarLabel: "Requests",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" size={28} color={color} />
          ),
          headerShown: false,
          tabBarAccessibilityLabel: "RequestList",
          tabBarLabel: "Notification",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color={color}
            />
          ),
          headerShown: false,
          tabBarAccessibilityLabel: "ProfileScreen",
          tabBarLabel: "Profile",
          tabBarLabelStyle: { fontSize: 14 },
          headerTitleStyle: { color: "#000000" }, // Set title color to black
        })}
      />
    </Tab.Navigator>
  );
}
export default TabNavigatorCoach;
