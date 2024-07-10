import { ApplicationScreenProps } from "@/types/navigation";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import AuthService from "@/services/AuthService";
import { ActivityIndicator } from "react-native-paper";
import { setCredentials, setToken } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import messaging from "@react-native-firebase/messaging";
interface Props {}
function SplashScreen({ navigation }: ApplicationScreenProps) {
  const [loading, setLoading] = useState(true);
  const role = useAppSelector((state) => state.auth.role);
  const dispatch = useAppDispatch();
  useEffect(() => {
    checkToken();
  }, [navigation]);

  const checkToken = async () => {
     // AuthService.removeToken();
    try {
      const token = await AuthService.getToken();
      if (!token) {
        // Token exists, navigate to TabNavigator
        //dispatch(setToken(token));
        navigation.replace("LoginScreen");
      } else {
        dispatch(setToken(token));
      }
    } catch (error) {
      console.log("Error checking token:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!role) return;
    // Navigate based on the role
    console.log(role);
    if (role === "ROLE_COACH") {
      navigation.replace("TabNavigatorCoach");
    } else if (role === "ROLE_TRAINEE") {
      navigation.replace("TabNavigatorTrainee");
    }
  }, [role]);

  return (
    <View style={styles.container}>
      <View style={styles.child_container}>
        <Image
          source={require("../../theme/assets/images/logo.png")}
          style={styles.image}
        />
        <Text style={styles.text}>ProxymFitHub</Text>
        <Text style={styles.textInfo}>Everybody Can Train</Text>
      </View>
      {loading ? (
        // Display activity indicator while loading
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View>
          <Button
            color="#f194ff"
            title="Get started"
            onPress={() => navigation.navigate("TabNavigatorCoach")}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingBottom: 150,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  child_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 90,
    fontSize: 32,
    fontWeight: "bold",
  },
  textInfo: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "red",
  },
});

export default SplashScreen;
