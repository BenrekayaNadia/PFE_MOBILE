import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';

const BASE_URL = 'http://localhost:8082';
const ChatService = {
    getDiscussion: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/chat/getAll`);
          return response.data;
        } catch (error) {
          console.log('Error fetching discussions:', error);
          throw error;
        }
      },
};
export default ChatService;

