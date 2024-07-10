import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ApplicationScreenProps } from "@/types/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";


function LoginScreen({ navigation }: ApplicationScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.auth.role);
  useEffect(() => {
    if (!role) return;
    // Navigate based on the role
    console.log(role);
    if (role === "ROLE_COACH") {
      navigation.replace("TabNavigatorCoach");
    } else if (role === "ROLE_TRAINEE") {
      navigation.replace("TabNavigatorTrainee");
    }
  }, [role, navigation]);
  const handleLogin = async () => {
    console.log("login");
    if (!email || !password) {
      Alert.alert("Please enter both email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Password must be at least 6 characters long");
      return;
    }

    /*  console.log("call api backend");
   navigation.navigate("DashboardScreen", { data: { email, password } }); */
    try {
      console.log("login");
      console.log("hello", email);
      console.log(password);
      const deviceToken = await messaging().getToken();
      const token= await messaging().getToken();
      console.log(token);
      const result = await dispatch(login({ email, password })).unwrap();

      result.role;
      //result.role  use effect contain a test  role coach or trainee

      // navigation.navigate("DashboardScreen", { data: { email, password } });
    } catch (error) {
      Alert.alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title1}>Hey there,</Text>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <LinearGradient
            colors={["#CC8FED", "#6B50F6"]}
            style={styles.loginButton}
          >
            <View style={styles.loginButtonContent}>
              <MaterialCommunityIcons
                name="login"
                size={20}
                color="white"
                style={styles.loginIcon}
              />
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.registerText}>
          Don't have an account yet?{" "}
          <Text style={styles.registerLink}>Register</Text>
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
    // borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    width: "90%",
  },
  loginButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPasswordText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  loginButton: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  loginIcon: {
    marginRight: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    marginBottom: 40,
  },
  registerText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  registerLink: {
    color: "#CC8FED",
    fontWeight: "bold",
  },
});

export default LoginScreen;
