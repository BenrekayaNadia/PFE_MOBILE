import axios from "../axios";

const BASE_URL = "http://localhost:8082";
const PackService = {
  getAllPacks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pack/getAll`);
      return response.data;
    } catch (error) {
      console.log("Error fetching all packs:", error);
      throw error;
    }
  },
};
export default PackService;
