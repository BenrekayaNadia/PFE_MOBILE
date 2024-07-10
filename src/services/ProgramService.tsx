import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';

const BASE_URL = 'http://localhost:8082';
const ProgramService = {
    getAllprogramsByCoach: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/programme/coach`);
          return response.data;
        } catch (error) {
          console.log('Error fetching programs:', error);
          throw error;
        }
      },
      getAllProgramsByTrainee: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/programme/trainee`);
            return response.data;
        } catch (error) {
            console.log('Error fetching programs:', error);
            throw error;
        }
    },
};

export default ProgramService;

