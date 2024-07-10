import DemandeService from "@/services/DemandService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export enum StatusEnum {
    PASSEE = 'PASSEE',
    ANNULEE = 'ANNULEE',
  }
interface Coach {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    specialite: string;
    tarif: number;
  }
export interface Demand{
    id:number;
    traineeName:string,
    coachName:string,
    status:StatusEnum;
}
interface DemandState {
    token: string | null;
    demands: Demand[];
    coaches: Coach[];
    loading: boolean;
    error: string | null;
  }
  const initialState: DemandState = {
    token: null,
    coaches: [],
    demands: [],
    loading: false,
    error: null,
  };
export const getAllDemands = createAsyncThunk(
    'demande/getAllDemands',
    async () => {
      try {
        const response = await DemandeService.getAllDemands();
        //console.log(response[0].trainee.email)
        return response;
      } catch (error) {
        console.error("Error fetching all demands:", error);
        throw error;
      }
    }
  );
  export const acceptDemand = createAsyncThunk(
    'demande/acceptDemand',
    async (id:number, { getState }) => {
      try {
        const response = await DemandeService.acceptDemand(id);
        return response
      } catch (error) {
        console.error("Error accepting demand:", error);
        throw error;
      }
    }
  );
  export const rejectDemand = createAsyncThunk(
    'demande/rejectDemand',
    async (id:number, { getState }) => {
      try {
        const response = await DemandeService.rejectDemand(id);
        return response
      } catch (error) {
        console.error("Error rejecting demand:", error);
       
        throw error;
      }
    }
  );
  const demandeSlice = createSlice({
    name: 'demande',
    initialState,
    reducers:  {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllDemands.pending, (state) => {
                state.loading = true;
               
            })
            .addCase(getAllDemands.fulfilled, (state, action) => {
                state.loading = false;
                
                state.demands = action.payload;
            })
            .addCase(getAllDemands.rejected, (state, action) => {
                state.loading = false;
               
                state.error = action.error.message || 'Failed to fetch demands';
            })
            .addCase(acceptDemand.pending, (state) => {
                state.loading = true;
                
            })
            .addCase(acceptDemand.fulfilled, (state, action) => {
                state.loading = false;
                console.log(state.demands)
                console.log(action.payload)
                state.demands = state.demands.filter(demand => {
                    console.log(demand.id !== action.payload.id)
                    return demand.id !== action.payload.id
                });
            })
            .addCase(acceptDemand.rejected, (state, action) => {
                state.loading = false;
               
                state.error = action.error.message || 'Failed to accept demand';
            })
            .addCase(rejectDemand.pending, (state) => {
                state.loading = true;
              
            })
            .addCase(rejectDemand.fulfilled, (state, action) => {
                state.loading = false;
                state.demands = state.demands.filter(demand => {
                    console.log(demand.id !== action.payload.id)
                    return demand.id !== action.payload.id
                });
            })
            .addCase(rejectDemand.rejected, (state, action) => {
                state.loading = false;
               
                state.error = action.error.message || 'Failed to reject demand';
            });
    }
});

export default demandeSlice.reducer;