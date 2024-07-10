import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProgramService from '@/services/ProgramService';  

const initialState = {
  programs: [],
  loading: false,
  error: null,
};

export const getProgramsByCoach = createAsyncThunk(
    'program/getProgramsByCoach',
    async () => {
      const response = await ProgramService.getAllprogramsByCoach();
      return response;
    }
  );
  export const getProgramsByTrainee = createAsyncThunk(
    'program/getProgramsByTrainee',
    async () => {
        const response = await ProgramService.getAllProgramsByTrainee();
        return response;
    }
);
  
  const programSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProgramsByCoach.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getProgramsByCoach.fulfilled, (state, action) => {
          state.loading = false;
          state.programs = action.payload;
        })
        .addCase(getProgramsByCoach.rejected, (state, action) => {
          state.loading = false;
        //   state.error = action.error.message ||'Failed to fetch programs by coach';
       
        })
        .addCase(getProgramsByTrainee.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(getProgramsByTrainee.fulfilled, (state, action) => {
          state.loading = false;
          state.programs = action.payload;
      })
      .addCase(getProgramsByTrainee.rejected, (state, action) => {
          state.loading = false;
          // state.error = action.error.message || 'Failed to fetch programs by trainee';
      });
    },
  });
  
  export default programSlice.reducer;