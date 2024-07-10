import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';

const BASE_URL = 'http://localhost:8082';
const NotificationsService = {
    getNotificationsByUser: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/notifications/user`);
          return response.data;
        } catch (error) {
          console.log('Error fetching notifications:', error);
          throw error;
        }
      },
};
export default NotificationsService;

