import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutCoachNavigator from "@/tabs/TopTabNavigator";

const WorkoutCoachScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5ECF6" />
      <Text style={styles.mainHeader}>Workout Coach</Text>
      <View style={styles.tabContainer}>
        <WorkoutCoachNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
  },
  mainHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 3,
  },
 /*  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 5,
  color: "#000",
  textAlign: "center",
  padding: 15, */
  tabContainer: {
    flex: 1,
    marginTop: 10,
  },
});


export default WorkoutCoachScreen;
