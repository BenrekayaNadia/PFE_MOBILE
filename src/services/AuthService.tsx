import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios';
import {JwtPayload, jwtDecode} from 'jwt-decode';
import { decode } from "base-64";
global.atob = decode;

const BASE_URL = 'http://localhost:8082';
 const AuthService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      console.log('Error during login:', error);
      throw error;
    }
  },
  
  register: async (userDetails: { email: string, password: string, firstname: string, lastname: string, role: string }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, userDetails);
      return response.data;
    } catch (error) {
      console.log('Error during registration:', error);
      throw error;
    }
  },
  
  getToken: async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (error) {
      console.log('Error getting token:', error);
      throw error;
    }
  },

  setToken: async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('Error storing token:', error);
      throw error;
    }
  },

  removeToken: async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.log('Error removing token:', error);
      throw error;
    }
  },
  decodeToken: (token:string) => {
    try {
      const decoded = jwtDecode(token) 
      return decoded;
    } catch (error) {
      console.log('Error decoding token:', error);
      throw error;
    }
  },
  saveDeviceToken: async (token: any) => {
    try {
      
      const response = await axios.post(`${BASE_URL}/auth/saveDeviceToken`, { token });
      return response.data;
    } catch (error) {
      console.log('Error saving device token:', error);
      throw error;
    }
  }
};

export default AuthService;