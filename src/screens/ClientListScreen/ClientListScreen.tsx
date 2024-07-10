import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { screen } from "@testing-library/react-native";

const ClientListScreen = () => {
  const navigation = useNavigation<any>();
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Ghassen",
      profilePic: require("../../theme/assets/images/avatar1.png"),
      height: 1.8,
      objectif: "Build Muscle",
      avis: "Good progress",
      DateofBirth: "1990-01-01",
      weight: 80,
    },
    {
      id: 2,
      name: "Wadia",
      profilePic: require("../../theme/assets/images/avatar2.png"),
      height: 1.65,
      objectif: "Lose Weight",
      avis: "Needs more effort",
      DateofBirth: "1992-02-02",
      weight: 60,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#808080" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search trainees"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>
      <View style={styles.clientsList}>
        {clients
          .filter((client) => {
            const name = client.name.toLowerCase();
            const query = searchQuery.toLowerCase();
            return name.includes(query);
          })
          .map((client, index) => (
            <TouchableOpacity
              key={client.id}
              style={styles.clientItem}
              onPress={() => navigation.navigate('Trainees',{screen:'ClientDetailScreen',params:{client},headerShown : false})}
            >
              <Image source={client.profilePic} style={styles.profilePic} />
              <View style={styles.clientInfo}>
                <Text style={styles.clientName}>{client.name}</Text>
                <Text style={styles.clientDetails}>Height: {client.height} m</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    padding: 0,
  },
  clientsList: {
    flex: 1,
  },
  clientItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    backgroundColor: '#fae6ff',
    borderRadius: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  clientInfo: {
    flex: 1,
    marginLeft: 10,
  },
  clientName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clientDetails: {
    fontSize: 14,
    color: "#808080",
  },
});

export default ClientListScreen;
