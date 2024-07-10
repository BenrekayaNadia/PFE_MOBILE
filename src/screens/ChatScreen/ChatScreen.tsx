import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchDiscussions } from "@/store/slices/chatSlice";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const ChatScreen = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const dispatch = useAppDispatch();
  const discussions = useAppSelector((state) => state.discussions.discussions);
  useEffect(() => {
   
      dispatch(fetchDiscussions());
  
  }, [ dispatch]);
  // const [chats, setChats] = useState([
  //   {
  //     name: "Wadia",
  //     profilePic: require("../../theme/assets/images/avatar1.png"),
  //     lastMessage: "Last message",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "Ghassen",
  //     profilePic: require("../../theme/assets/images/avatar2.png"),
  //     lastMessage: "Last message",
  //     time: "1:00 PM",
  //   },
  //   {
  //     name: "Nadia",
  //     profilePic: require("../../theme/assets/images/avatar2.png"),
  //     lastMessage: "Last message",
  //     time: "1:00 PM",
  //   },
  //   {
  //     name: "Mahdi",
  //     profilePic: require("../../theme/assets/images/avatar1.png"),
  //     lastMessage: "Last message",
  //     time: "12:00 PM",
  //   },
    
  // ]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleBackPress}>
            {/* <View style={styles.iconBackground}>
              <Icon name="chevron-back" size={24} color="#000" />
            </View> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#808080" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search friends or neighbors"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>
      <View style={styles.chatsList}>
        {discussions
          .filter((discussion) => {
            const name = discussion.name.toLowerCase();
            const query = searchQuery.toLowerCase();
            return name.includes(query);
          })
          .map((discussion, index) => (
            <TouchableOpacity
              key={index}
              style={styles.chatItem}
              onPress={() => navigation.navigate('ChatRoomScreen')}
            >
              <Image source={require("../../theme/assets/images/avatar1.png")} style={styles.profilePic} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{discussion.name}</Text>
                <Text style={styles.chatMessage}>Last message</Text>
              </View>
              <Text style={styles.chatTime}>12:00 PM</Text>
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
    position: "relative",
  },
  header: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    textAlign: "center",
    padding: 15,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatsList: {
    flex: 1,
    padding: 16,
  },
  chatItem: {
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
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 14,
    color: "#808080",
  },
  chatTime: {
    fontSize: 12,
    color: "#808080",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 10,
    paddingHorizontal: 20,
  },
  iconBackground: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 8,
    marginLeft: -20,
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
    marginTop: 20,
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
});

export default ChatScreen;
