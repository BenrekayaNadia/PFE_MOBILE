import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import { useNavigation } from "@react-navigation/native";
import { ApplicationScreenProps } from "@/types/navigation";

function WelcomeScreen({ navigation }: ApplicationScreenProps) {
  const handleCoach = () => {
    navigation.navigate("RegisterScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Coach" color="#ff33ff" onPress={handleCoach} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Trainee" color="#ff33ff" onPress={() => {}} />
      </View>
      <View style={styles.button}>
        <Button color="#f194ff" title="Lets Get Started" onPress={() => {}} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 200,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "column-reverse",
    marginVertical: "auto",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 30,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
