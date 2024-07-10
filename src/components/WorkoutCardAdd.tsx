import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Svg,
  Text as SvgText,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

interface WorkoutCardAddProps {
  title: string;
  exercises: number;
  time: number;
  imageSource: any;
  navigation: any;
  // onAdd: () => void; // Prop for handling add button press
}

const WorkoutCardAdd = ({
  title,
  // exercises,
  time,
  imageSource,
  navigation,
}: WorkoutCardAddProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        {/* <Text style={styles.cardInfo}>
          {exercises} Exercises | {time} mins
        </Text> */}
        <View
          style={styles.addProgramButton}
        >
          <Icon
            name="add-circle-outline"
            size={20}
            color="#C150F6"
            style={styles.icon}
          />
          <Svg height="20" width="150">
            <Defs>
              <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#C150F6" stopOpacity="1" />
                <Stop offset="100%" stopColor="#EEA4CE" stopOpacity="1" />
              </SvgLinearGradient>
            </Defs>
            <SvgText
              fill="url(#grad)"
              x="50%"
              y="15"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              Manage Exercices
            </SvgText>
          </Svg>
        </View>
      </View>
      <Image source={imageSource} style={styles.cardImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fae6ff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardInfo: {
    fontSize: 14,
    color: "#888",
  },
  addProgramButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    width: 190,
    height: 45,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  icon: {
    marginRight: 0,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 15,
    borderRadius: 10,
  },
});

export default WorkoutCardAdd;
