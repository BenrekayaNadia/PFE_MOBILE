import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
interface IPrice {
  id: number;
  nom: string;
  description: string;
  prix: number;
}

const PriceCard: React.FC<{ pack: IPrice }> = ({ pack }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubscribe = () => {
    console.log(`Subscribed to pack: ${pack.nom}`);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={toggleExpand}>
      <Text style={styles.title}>{pack.nom}</Text>
      <Text style={styles.price}>
        ${pack.prix.toFixed(2)} <Text style={styles.monthly}>/ month</Text>
      </Text>
      {isExpanded && (
        <View style={styles.details}>
          <Text style={styles.description}>{pack.description}</Text>
          <View style={styles.subscribeButton}><Button
            title="Subscribe Now"
            onPress={handleSubscribe}
            color="#EEA4CE"
          /></View>
          
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#CC8FED",
    //backgroundColor: "#e580ff"
    
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  monthly: {
    fontSize: 14,
    marginLeft: 4,
    color: "#000",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    color: "#000",
  },
  details: {
    marginTop: 10,
  },
  subscribeButton: {
    backgroundColor: '#db4dff',
    marginTop: 10,
  },
});

export default PriceCard;