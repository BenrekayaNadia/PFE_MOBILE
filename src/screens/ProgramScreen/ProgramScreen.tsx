import WorkoutCardAdd from "@/components/WorkoutCardAdd";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProgramsByCoach } from "@/store/slices/programSlice";
import { ApplicationStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const images = [
  require("../../theme/assets/images/workout1.png"),
  require("../../theme/assets/images/workout2.png"),
  require("../../theme/assets/images/workout3.png"),
];

const ProgramListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { programs, loading, error } = useAppSelector((state) => state.program);

  useEffect(() => {
    dispatch(getProgramsByCoach());
  }, [dispatch]);

  const handleAddWorkout = () => {
    console.log("Add workout button pressed");
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  const handleProgramPress = (id) => {
    console.log(id);
    navigation.navigate("CoachExerciseScreen",{ id });
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {programs.map((program, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleProgramPress(program.id)}
          >
            <WorkoutCardAdd
              key={index}
              title={program.nom}
              // description
              // exercices={program.exercices.length}
              time={program.duree}
              // Assign images dynamically using modulo operator to cycle through the images
              imageSource={images[index % images.length]}
              navigation={navigation} exercises={0}            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddWorkout}>
        <Text style={styles.addButtonText}>Add Program</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 80,
  },
  addButton: {
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
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProgramListScreen;
