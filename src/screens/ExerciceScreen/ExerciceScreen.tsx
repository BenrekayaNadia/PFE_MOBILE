import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import Icon from "react-native-vector-icons/Ionicons";

const ExerciceScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  const exercises = [
    {
      name: "Warm Up",
      time: "05:00",
      image: require("../../theme/assets/images/ex1.png"),
    },
    {
      name: "Jumping Jack",
      reps: "12x",
      image: require("../../theme/assets/images/ex2.png"),
    },
    {
      name: "Skipping",
      reps: "15x",
      image: require("../../theme/assets/images/ex3.png"),
    },
    {
      name: "Squats",
      reps: "20x",
      image: require("../../theme/assets/images/ex4.png"),
    },
    {
      name: "Arm Raises",
      time: "00:53",
      image: require("../../theme/assets/images/ex5.png"),
    },
    {
      name: "Rest and Drink",
      time: "02:00",
      image: require("../../theme/assets/images/ex6.png"),
    },
    {
      name: "Incline Push-Ups",
      reps: "12x",
      image: require("../../theme/assets/images/ex1.png"),
    },
    {
      name: "Push-Ups",
      reps: "15x",
      image: require("../../theme/assets/images/ex2.png"),
    },
  ];

  const [difficulty, setDifficulty] = useState("Beginner");

  const handleDifficultyPress = () => {
    console.log("Difficulty button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleBackPress}>
            <View style={styles.iconBackground}>
              <Icon name="chevron-back" size={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Fullbody Workout</Text>
        <Text style={styles.headerSubtitle}>11 Exercises | 32mins</Text>
      </View>
      <View style={styles.difficultyContainer}>
        <TouchableOpacity
          style={styles.difficultyButton}
          onPress={handleDifficultyPress}
        >
          <View style={styles.iconContainer}>
            <FontAwesome6
              name="arrow-right-arrow-left"
              size={16}
              color="#9C9C9C"
              style={styles.rotatedIcon}
            />
            <Text style={styles.difficultyText}>Difficulty</Text>
          </View>
          <View style={styles.difficultyValueContainer}>
            <Text style={styles.difficultyValue}>{difficulty}</Text>
            <Icon name="chevron-forward" size={16} color="#9C9C9C" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Exercises</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {exercises.map((exercise) => (
          <View key={exercise.name} style={styles.exercise}>
            <Image source={exercise.image} style={styles.exerciseImage} />
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              {exercise.reps ? (
                <Text style={styles.exerciseReps}>{exercise.reps}</Text>
              ) : (
                <Text style={styles.exerciseTime}>{exercise.time}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                name="chevron-forward-circle-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
    position: "relative",
  },
  header: {
    paddingVertical: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 10,
    paddingHorizontal: 20,
  },
  iconBackground: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 8,
    marginLeft: -20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    padding: 20,
  },
  exercise: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseReps: {
    fontSize: 14,
  },
  exerciseTime: {
    fontSize: 14,
  },
  iconButton: {
    padding: 5,
  },
  startButton: {
    backgroundColor: "#946DE9",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: "auto",
    marginBottom: 20,
    alignItems: "center",
    position: "absolute",
    width: "90%",
    left: "5%",
    bottom: 0,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  difficultyContainer: {
    marginBottom: 20,
    backgroundColor: "#fae6ff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  difficultyButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  difficultyText: {
    fontSize: 16,
    color: "#9C9C9C",
    marginLeft: 10,
  },
  difficultyValueContainer: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  difficultyValue: {
    fontSize: 16,
    color: "#9C9C9C",
    marginRight: 10,
  },
  rotatedIcon: {
    transform: [{ rotate: "90deg" }],
  },
});

export default ExerciceScreen;
