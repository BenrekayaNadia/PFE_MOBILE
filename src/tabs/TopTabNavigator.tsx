import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import ClientListScreen from "@/screens/ClientListScreen/ClientListScreen";
import ProgramListScreen from "@/screens/ProgramScreen/ProgramScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ClientDetailScreen from "@/screens/ClientListScreen/ClientDetailsScreen";
import CoachExerciseScreen from "@/screens/ExerciceScreen/CoachExerciceScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const ClientStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientListScreen" component={ClientListScreen} />
      <Stack.Screen name="ClientDetailScreen" component={ClientDetailScreen} />
    </Stack.Navigator>
     
  );
  const ProgramStackNavigator = () =>(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="ProgramListScreen" component={ProgramListScreen} />
     <Stack.Screen name="CoachExerciseScreen" component={CoachExerciseScreen} />
   </Stack.Navigator>
  )
const WorkoutCoachNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: {
          backgroundColor: "#fae6ff",
          height: 50, // Adjusted height for better appearance
          justifyContent: "center", // Center content vertically
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#CC8FED",
          height: 3, // Thicker indicator for better visibility
        },
        tabBarLabelStyle: {
          fontSize: 14, // Larger font size for tab labels
          fontWeight: "bold", // Bold text for active tab
        },
      }}
    >
      <Tab.Screen name="Programs" component={ProgramStackNavigator} />
      <Tab.Screen name="Trainees" component={ClientStackNavigator} />
      {/* <Tab.Screen name="Trainees" component={ClientStackNavigator} /> */}
    </Tab.Navigator>
  );
};

export default WorkoutCoachNavigator;
