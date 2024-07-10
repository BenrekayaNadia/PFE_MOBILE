import axios from "../axios";

const BASE_URL = "http://localhost:8082";
const DemandeService = {
  addDemand: async (coachId: number) => {
    try {
      const response = await axios.post(`${BASE_URL}/demand/add`, {
        coachId: coachId,
      });
      return response.data;
    } catch (error) {
      console.log("Error adding demand:", error);
      throw error;
    }
  },
  getAllDemands: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/demand/getAll`);
      return response.data;
    } catch (error) {
      console.log("Error fetching all demands:", error);
      throw error;
    }
  },
  acceptDemand: async (id:number) => {
    try {
      const response = await axios.patch(`${BASE_URL}/demand/${id}/accept`);
      return response.data;
    } catch (error) {
      console.log("Error accepting demand:", error);
      throw error;
    }
  },
  rejectDemand: async (id:number) => {
    try {
      const response = await axios.patch(`${BASE_URL}/demand/${id}/reject`);
      return response.data;
    } catch (error) {
      console.log("Error rejecting demand:", error);
      throw error;
    }
  },
};
export default DemandeService;
