import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import BarChart from "@/components/BarChart";

const ClientDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { client } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        {/* <Text style={styles.headerText}>Client Details</Text> */}
      </View>
      <View style={styles.profileSection}>
        <Image source={client.profilePic} style={styles.profilePic} />
        <Text style={styles.name}>{client.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Objective: </Text>
          {client.objectif}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Avis: </Text>
          {client.avis}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Date of Birth: </Text>
          {client.DateofBirth}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Height: </Text>
          {client.height} m
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Weight: </Text>
          {client.weight} kg
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.barChartContainer}>
        <Text style={styles.chartTitle}>Weekly Activity</Text>
        <BarChart />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backIcon: {
    marginRight: 10,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 15,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  details: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 3,
  },
  barChartContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:50,
  // marginTop:1
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
export default ClientDetailScreen;
