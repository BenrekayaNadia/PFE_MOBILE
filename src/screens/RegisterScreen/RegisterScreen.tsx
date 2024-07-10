import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import { ApplicationScreenProps } from "@/types/navigation";
import { useAppDispatch } from "@/store/hooks";
import { register } from "@/store/slices/authSlice";

function RegisterScreen({ navigation }: ApplicationScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("COACH");
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    console.log("register");
    if (!firstName || !lastName || !email || !password || !role) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await dispatch(
        register({
          email,
          password,
          firstname: firstName,
          lastname: lastName,
          role,
        })
      );
      if (role === "COACH") {
        navigation.navigate("PricingScreen");
      } else if (role === "TRAINEE") {
        navigation.navigate("PersonalInfoScreen");
      }
    } catch (error) {
      Alert.alert("Error", "Please select a role");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title1}>Hey there,</Text>
        <Text style={styles.title}>Create an Account</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="lock"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
             <Icon
              name={passwordVisible ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Role:</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "COACH" && styles.selectedRoleButton,
            ]}
            onPress={() => setRole("COACH")}
          >
            <Text style={styles.roleButtonText}>Coach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "TRAINEE" && styles.selectedRoleButton,
            ]}
            onPress={() => setRole("TRAINEE")}
          >
            <Text style={styles.roleButtonText}>Trainee</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={handlePress}>
          <LinearGradient
            colors={["#CC8FED", "#6B50F6"]}
            style={styles.registerButton}
          >
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5ECF6",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  title1: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    width: "90%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
    textAlign: "center",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedRoleButton: {
    backgroundColor: "#f194ff",
  },
  roleButtonText: {
    color: "#000",
  },
  registerButton: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    marginBottom: 40,
  },
  loginText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  loginLink: {
    color: "#CC8FED",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
