import AuthService from '@/services/AuthService';
import CoachService from '@/services/CoachService';
import DemandeService from '@/services/DemandService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Coach {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  specialite: string;
  tarif: number;
}
interface CoachState {
  token: string | null;
  demands: Demand[];
  coaches: Coach[];
  loading: boolean;
  error: string | null;
}
interface Demand {
  coachId: number;
}

const initialState: CoachState = {
  token: null,
  coaches: [],
  demands: [],
  loading: false,
  error: null,
};
export const fetchCoaches = createAsyncThunk('coaches/fetchCoaches', async () => {
  const token = await AuthService.getToken();
  if (!token) throw new Error('No token found'); 
  const data = await CoachService.getAllCoaches();
 console.log(data)
  return data;
});
export const addDemand = createAsyncThunk(
  'coaches/addDemand',
  async ({ coachId }: { coachId: number }, { getState }) => {
    try {
      // Call the API to add demand
      const response = await DemandeService.addDemand(coachId);
      // Extract demands from state
      const { demands }: { demands: Demand[] } = (getState() as any).coach;
      // Return updated demands including the newly added demand
      return { coachId, demands: [...demands, { coachId }] };
    } catch (error) {
      console.log("Error adding demand:", error);
      throw error;
    }
  }
);

const coachesSlice = createSlice({
  name: 'coach',
  initialState,
  reducers:  {
    setCoaches: (state, action) => {
        const {token,coaches}=action.payload;
        state.token =token;
        state.coaches = coaches;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoaches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoaches.fulfilled, (state, action) => {
        state.loading = false;
        state.coaches = action.payload;
      })
      .addCase(fetchCoaches.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch coaches';
      })
      .addCase(addDemand.fulfilled, (state, action) => {
        const { coachId, demands } = action.payload;
        state.demands = demands;
        state.coaches = state.coaches.filter(coach => coach.id !== coachId);
      });
      
  },
});
export const { setCoaches } = coachesSlice.actions;
export default coachesSlice.reducer;
