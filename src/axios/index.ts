import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* const api = axios.create({
  baseURL: 'http://localhost:8082',
}); */

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
   
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
 function (response)  {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      // Handle token expiration, e.g., redirect to login screen
      await AsyncStorage.removeItem('token');
      // Navigate to login screen if necessary
    }
    return Promise.reject(error);
  }
);
export const t = axios;
export default axios;
