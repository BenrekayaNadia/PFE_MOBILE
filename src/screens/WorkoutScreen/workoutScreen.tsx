import React from "react";
import { useAppSelector } from "@/store/hooks";
import WorkoutCoachScreen from "./workoutCoachScreen";
import WorkoutTraineeScreen from "./workoutTraineeScreen";

const WorkoutScreen = () => {
  const role = useAppSelector((state) => state.auth.role);
  if (role === "ROLE_COACH") return <WorkoutCoachScreen />;
  if (role === "ROLE_TRAINEE") return <WorkoutTraineeScreen />;
  return undefined;
};

export default WorkoutScreen;
