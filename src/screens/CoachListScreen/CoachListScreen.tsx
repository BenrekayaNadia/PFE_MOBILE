import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Svg, Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addDemand, fetchCoaches } from "@/store/slices/coachSlice";
import Toast from "react-native-toast-message";

interface Coach {
  id: number;
  firstname: string;
  lastname: string;
  specialite: string;
  tarif: number;
}

const CoachRegisterScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { coaches, loading, error } = useAppSelector((state) => state.coach);

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  const handleSendInvitation = async (coachId: number) => {
    try {
      await dispatch(addDemand({ coachId })).unwrap();
      showToast();
    } catch (error) {
      console.log("Error sending invitation:", error);
    }
  }

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Invitation Sent",
      text2: "Your invitation has been sent successfully.",
      visibilityTime: 2500,
    });
  }

  const renderItem = ({ item }: { item: Coach }) => (
    <View style={styles.coachItem}>
      <View style={styles.coachInfo}>
        <Text style={styles.name}>{item.firstname} {item.lastname}</Text>
        <Text style={styles.specialite}>{item.specialite}</Text>
        <Text style={styles.tarif}>${item.tarif}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSendInvitation(item.id)}
      >
        <View style={styles.gradientTextContainer}>
          <Svg height="20" width="120">
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
              Send Invitation
            </SvgText>
          </Svg>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coaches List</Text>
      <FlatList
        data={coaches}
        keyExtractor={(coach) => coach.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECF6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    textAlign: "center",
    padding: 15,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  coachItem: {
    backgroundColor: '#fae6ff',
    paddingVertical: 30,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: '#888',
  },
  specialite: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  tarif: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 120,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTextContainer: {
    alignItems: 'center',
  },
});

export default CoachRegisterScreen;
