import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Svg,
  Text as SvgText,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from "react-native-svg";

interface WorkoutCardProps {
  title: string;
  exercises: number;
  time: number;
  imageSource: any;
  navigation: any;
}

const WorkoutCard = ({
  title,
  exercises,
  time,
  imageSource,
  navigation,
}: WorkoutCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardInfo}>
          {exercises} Exercises | {time} mins
        </Text>
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => navigation.navigate("ExerciceScreen")}
        >
          <View style={styles.gradientTextContainer}>
            <Svg height="20" width="100">
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
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
              >
                View more
              </SvgText>
            </Svg>
          </View>
        </TouchableOpacity>
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
    marginBottom: 15,
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
  viewMoreButton: {
    marginTop: 10,
    borderRadius: 20,
    width: 110,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  gradientTextContainer: {
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 15,
    borderRadius: 10,
  },
});

export default WorkoutCard;
