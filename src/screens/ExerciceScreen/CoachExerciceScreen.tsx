import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getexercicesByProgram } from "@/store/slices/exerciceSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { StackScreenProps } from "@react-navigation/stack";
import { ApplicationStackParamList } from "@/types/navigation";

const CoachExerciseScreen  = ({ route }) => {
  const dispatch = useAppDispatch();
  const { exercices, loading, error } = useAppSelector(
    (state) => state.exercice
  );

  // const { programId } = route.params;
  // console.log('Received programId:', programId); // Debug log
 
  const { id } = route.params;


  useEffect(() => {
    if (id) {
      dispatch(getexercicesByProgram(id));
    }
  }, [dispatch, id]);
  // useEffect(() => {
  //   console.log('programId:', id);
  //   if (id) {
  //     dispatch(getexercicesByProgram(id));
  //   }
  // }, [dispatch, id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  /*  const handleAddExercise = () => {
    // Add a new exercise (placeholder implementation)
    setExercises([
      ...exercises,
      { name: "New Exercise", reps: "10x", image: require("../../theme/assets/images/ex1.png") },
    ]);
  };

  const handleDeleteExercise = (index: number) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const handleEditExercise = (index: number, name: string, reps: string) => {
    const newExercises = exercises.map((exercise, i) => 
      i === index ? { ...exercise, name, reps } : exercise
    );
    setExercises(newExercises);
  }; */
console.log(exercices)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {exercices.map((exercice, index) => (
          <View key={index} style={styles.exercise}>
             <Image source={require("../../theme/assets/images/ex1.png")} style={styles.exerciseImage} />
            <View style={styles.exerciseDetails}>
              <TextInput
                style={styles.exerciseName}
                value={exercice.nom}
                editable={false}
              />
              {exercice.reps ? (
                <TextInput
                  style={styles.exerciseReps}
                  value={exercice.reps}
                  editable={false}
                />
              ) : (
                <Text style={styles.exerciseTime}>{exercice.time}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <Icon name="trash-bin" size={24} color="#FF0000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 20,
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
  deleteButton: {
    padding: 5,
  },
  addButton: {
    backgroundColor: "#946DE9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CoachExerciseScreen;
