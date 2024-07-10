import { ApplicationScreenProps } from "@/types/navigation";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type GenderType = "Male" | "Female" | "Other";

function PersonalInfoScreen({ navigation }: ApplicationScreenProps) {
  const [gender, setGender] = useState<GenderType>("Male");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [weight, setWeight] = useState<number | string>(0); // Adjusted type to allow string
  const [height, setHeight] = useState<number | string>(0); // Adjusted type to allow string
  const handleNextPress = () => {
    navigation.navigate("NotificationScreen");
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's complete your profile</Text>
      <Text style={styles.label}>Choose Gender:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, gender === "Male" && styles.selected]}
          onPress={() => setGender("Male")}
        >
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === "Female" && styles.selected]}
          onPress={() => setGender("Female")}
        >
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === "Other" && styles.selected]}
          onPress={() => setGender("Other")}
        >
          <Text style={styles.radioText}>Other</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="DD-MM-YYYY"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Your Weight (KG):</Text>
      <TextInput
        style={styles.input}
        value={weight.toString()} // Ensure value is always a string
        onChangeText={(text) => setWeight(text)} // Just set the text, no need for conversion here
        placeholder="Weight"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Your Height (CM):</Text>
      <TextInput
        style={styles.input}
        value={height.toString()} // Ensure value is always a string
        onChangeText={(text) => setHeight(text)} // Just set the text, no need for conversion here
        placeholder="Height"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Save Info</Text>
      </TouchableOpacity>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  radioButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "30%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "lightgray",
  },
  radioText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#f194ff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
  
});

export default PersonalInfoScreen;
