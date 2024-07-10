import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';

const BASE_URL = 'http://localhost:8082';
const ExerciceService = {
    async getAllExercisesByProgram(id) {
        try {
          const response = await axios.get(`${BASE_URL}/exercice/getByProgram/${id}`);
          return response.data;
        } catch (error) {
          console.log('Error fetching exercises:', error);
          throw error;
        }
    },
};
export default ExerciceService;

