import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ExerciceService from '@/services/ExerciceService';  

const initialState = {
  exercices: [],
  loading: false,
  error: null,
};

export const getexercicesByProgram = createAsyncThunk(
    'exercice/getexercicesByProgram',
    async (id) => {
      const response = await ExerciceService.getAllExercisesByProgram(id);
      return response;
    }
  );
  
  const exerciceSlice = createSlice({
    name: 'exercice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getexercicesByProgram.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getexercicesByProgram.fulfilled, (state, action) => {
          state.loading = false;
          state.exercices = action.payload;
        })
        .addCase(getexercicesByProgram.rejected, (state, action) => {
          state.loading = false;
          // state.error = action.error.message ||'Failed to fetch programs by coach';
       
        });
    },
  });
  
  export default exerciceSlice.reducer;