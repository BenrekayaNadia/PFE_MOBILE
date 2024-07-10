import React from "react";
import { StyleSheet, View, Text } from "react-native";

const data = [
  { day: "Sun", value: 20 },
  { day: "Mon", value: 70 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 60 },
];

const BarChart = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.barContainer}>
          <View style={styles.barBackground}>
            <View
              style={[
                styles.bar,
                {
                  height: item.value,
                  backgroundColor:
                    item.value < 40
                      ? "#00e676"
                      : item.value < 70
                      ? "#c678dd"
                      : "#00e676",
                },
              ]}
            />
          </View>
          <Text style={styles.day}>{item.day}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: 20,
  },
  barContainer: {
    alignItems: "center",
  },
  bar: {
    width: 20,
    borderRadius: 10,
  },
  barBackground: {
    width: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#F7F8F8",
    height : 100,
    display : 'flex',
    justifyContent : 'flex-end'
  },
  day: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default BarChart;
