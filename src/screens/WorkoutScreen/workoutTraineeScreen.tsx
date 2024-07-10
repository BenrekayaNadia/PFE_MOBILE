import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import WorkoutCard from "@/components/WorkoutCard";
import { StackNavigationProp } from "@react-navigation/stack";
import BarChart from "@/components/BarChart";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProgramsByTrainee } from "@/store/slices/programSlice";

const WorkoutTraineeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProgramsByTrainee());
  }, [dispatch]);
  const programs = useAppSelector((state) => state.program.programs);
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Workout Tracker</Text>
      <View style={styles.chartContainer}>
        <BarChart />
      </View>
      <View style={styles.scrollBackground}>
        <Text style={styles.header}>What Do You Want to Train</Text>
        {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
          <WorkoutCard
            title="Fullbody Workout"
            exercises={11}
            time={32}
            imageSource={require("../../theme/assets/images/workout1.png")}
            navigation={navigation}
          />
          <WorkoutCard
            title="Lowerbody Workout"
            exercises={12}
            time={40}
            imageSource={require("../../theme/assets/images/workout2.png")}
            navigation={navigation}
          />
          <WorkoutCard
            title="AB Workout"
            exercises={14}
            time={20}
            imageSource={require("../../theme/assets/images/workout3.png")}
            navigation={navigation}
          />
          <WorkoutCard
            title="Fullbody Workout"
            exercises={11}
            time={32}
            imageSource={require("../../theme/assets/images/workout1.png")}
            navigation={navigation}
          />
          <WorkoutCard
            title="Lowerbody Workout"
            exercises={12}
            time={40}
            imageSource={require("../../theme/assets/images/workout2.png")}
            navigation={navigation}
          />
          <WorkoutCard
            title="AB Workout"
            exercises={14}
            time={20}
            imageSource={require("../../theme/assets/images/workout3.png")}
            navigation={navigation}
          />
        </ScrollView> */}
        {programs.map((program) => (
  <WorkoutCard
    key={program.id}
    title={program.nom}
    exercises={program.exercises}
    time={program.duree}
    imageSource={require("../../theme/assets/images/workout1.png")} // Use dynamic images if needed
    navigation={navigation}
  />
))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e19fe9",
    // #ff99ff
  },
  chartContainer: {
    margin: 20,
    backgroundColor: "#F5ECF6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  scrollBackground: {
    backgroundColor: "#F5ECF6",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 80,
    color: "#000",
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  mainHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingTop: 15,
  },
});

export default WorkoutTraineeScreen;
