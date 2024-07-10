import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

interface Message {
  sender: string;
  text: string;
  senderImage: any;
}

const ChatRoomScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  const [users, setUsers] = useState([
    {
      name: "Nomi",
      image: require("../../theme/assets/images/avatar1.png"),
    },
    {
      name: "John",
      image: require("../../theme/assets/images/avatar2.png"),
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        sender: "Nomi",
        text: "Hey Ghassen",
        senderImage: users.find((user) => user.name === "Nomi")?.image,
      },
      {
        sender: "John",
        text: "How are you?",
        senderImage: users.find((user) => user.name === "John")?.image,
      },
      {
        sender: "Nomi",
        text: "I'm good how are you?",
        senderImage: users.find((user) => user.name === "Nomi")?.image,
      },
    ]);
  }, []);

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "John", // Assuming the user is John
          text: inputText,
          senderImage: users.find((user) => user.name === "John")?.image,
        },
      ]);
      setInputText("");
    }
  };

  const updateInputText = (text: string) => {
    setInputText(text);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.iconBackground}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ghassen</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) =>{
          console.log(item.sender === "John" ? styles.messageRight : styles.messageLeft)
          return  (
          <View
            style={[
              styles.messageContainer,
              item.sender === "John" ? styles.messageRight : styles.messageLeft,
            ]}
          >
            <Image
              source={item.senderImage}
              style={styles.senderImage}
              resizeMode="cover"
            />
            <View style={item.sender === "John" ? styles.messageBubbleRight : styles.messageBubbleLeft}>
              <Text style={styles.message}>{item.text}</Text>
            </View>
          </View>
        )}}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={updateInputText}
          placeholder="Type message..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Feather name="send" size={24} color="#e19fe9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconBackground: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 8,
  },
  messagesContainer: {
    padding: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  messageLeft: {
    width: "100%",
    display: "flex",
  },
  messageRight: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  messageBubbleLeft: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginLeft: 10,
  },
  messageBubbleRight: {
    backgroundColor: "#d1e7ff",
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginRight: 10,
  },
  message: {
    marginBottom: 5,
  },
  senderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    borderRadius: 20,
  },
  sendButton: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});

export default ChatRoomScreen;
