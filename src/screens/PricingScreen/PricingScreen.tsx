import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import PriceCard from "@/components/PriceCard"; // Adjust the import according to your file structure
import PackService from "@/services/PackService"; // Adjust the import according to your file structure

interface IPrice {
  id: number;
  nom: string;
  description: string;
  prix: number;
}

function PricingScreen() {
  const [packs, setPacks] = useState<IPrice[]>([]);

  useEffect(() => {
    const fetchPacks = async () => {
      try {
        const data = await PackService.getAllPacks();
        setPacks(data);
      } catch (error) {
        console.error("Error fetching packs:", error);
      }
    };

    fetchPacks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GET UNLIMITED ACCESS</Text>
      <Text style={styles.description}>
        When you subscribe, you’ll get instant unlimited access
      </Text>
      <FlatList
        data={packs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <PriceCard pack={item} />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#f8f9fa", // Light background color
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Darker text color
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#666", // Medium-dark text color
  },
   listContainer: {
    //alignItems: "center",
    width: "100%", // Ensure the list takes full width
  }, 
  cardWrapper: {
    padding: 5,
    marginBottom: 20,
    backgroundColor: "#fff", // White background color
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default PricingScreen;