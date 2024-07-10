import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';

const BASE_URL = 'http://localhost:8082';
const CoachService = {
    getAllCoaches: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/coach/getAll`);
          return response.data;
        } catch (error) {
          console.log('Error fetching coaches:', error);
          throw error;
        }
      },
};
export default CoachService;

