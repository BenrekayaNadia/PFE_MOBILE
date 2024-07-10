import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Demand, StatusEnum, acceptDemand, getAllDemands, rejectDemand } from "@/store/slices/demandSlice";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";

interface Trainee {
  id: number;
  firstname: string;
  lastname: string;
}

const ListOfTraineesRequests: React.FC = () => {
  const dispatch = useAppDispatch();
  const demands = useAppSelector((state: any) => state.demande.demands);

  useEffect(() => {
    dispatch(getAllDemands());
  }, [dispatch]);

  const handleInvitationPress = (demandeId: number,accept : boolean) => {
    console.log(accept)
    console.log(demandeId)
    if (accept) {
      dispatch(acceptDemand(demandeId));
    } else {
      dispatch(rejectDemand(demandeId));
    }
  };

  const renderDemande = ({ item }: { item: Demand }) => {
    
    // console.log("item",item)
  
    return (
    <View style={styles.traineeContainer}>
      <View>
        <Text style={styles.traineeName}>{item.traineeName}</Text>
        <Text style={styles.invitationText}>sent you an invitation</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Button
              mode="contained"
              style={[styles.button, item.status == StatusEnum.PASSEE && styles.acceptedButton]}
              disabled={!(item.status == null)}
              onPress={() => handleInvitationPress(item.id,true)}
            >
              {item.status == StatusEnum.PASSEE ? "Accepted" : "Accept"}
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              mode="contained"
              style={[styles.button, item.status == StatusEnum.ANNULEE && styles.rejectedButton]}
              disabled={!(item.status == null)}
              onPress={() => handleInvitationPress(item.id,false)}
            >
              {item.status == StatusEnum.ANNULEE ? "Rejected" : "Reject"}
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )};
console.log(demands)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of trainees requests</Text>
    
      <FlatList
        data={demands}
        renderItem={renderDemande}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
  traineeContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  traineeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#946DE9',
  },
  acceptedButton: {
    backgroundColor: '#946DE9',
  },
  rejectedButton: {
    backgroundColor: '#946DE9',
  },
  invitationText: {
    fontSize: 14,
    color: "grey",
    marginBottom: 8,
  },
});

export default ListOfTraineesRequests;