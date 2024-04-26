import { ApplicationScreenProps } from '@/types/navigation';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

interface IPrice {
  title: string;
  price: number;
  trainees: number;
}

const PricingCard: React.FC<IPrice> = ({ title, price, trainees }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>
        ${price} <Text style={styles.monthly}>/ month</Text>
      </Text>
      <Text style={styles.trainees}>Up to {trainees} trainees</Text>
      
    </View>
  );
};


function PricingScreen({ navigation}: ApplicationScreenProps) {
  const freePlan: IPrice = { title: 'Free', price: 0, trainees: 6 };
  const monthlyPlan10: IPrice = { title: 'Monthly', price: 25, trainees: 10 };
  const monthlyPlan20: IPrice = { title: 'Monthly', price: 12.99, trainees: 20 };

  return (
    
    <View style={styles.container}>
    <Text style={styles.heading}>GET UNLIMITED ACCESS</Text>
    <Text style={styles.description}>
    When you subscribe, you’ll get
    instant unlimited access
    </Text>
    <View style={styles.background} />
    <PricingCard {...freePlan} />
    <View style={styles.spacing} />
    <PricingCard {...monthlyPlan10} />
    <View style={styles.spacing} />
    <PricingCard {...monthlyPlan20} />
    <View style={styles.spacing} />
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe Now</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff', // Background color with opacity
    zIndex: -1, // Push the background behind other content
  },
  cardContainer: {
    backgroundColor: '#CC8FED',
    borderRadius:30,
    padding: 2,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  monthly: {
    fontSize: 14,
    marginLeft: 4,
  },
  trainees: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f194ff',
    padding: 12,
    borderRadius: 5,
    marginTop:16

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  spacing: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default PricingScreen;
