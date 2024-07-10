import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import NotificationService from "@/services/NotificationsService";
import ChatService from "@/services/chatService";

interface Discussion {
  id: number;
  coachId: number;
  traineeId: number;
}

interface DiscussionState {
  discussions: Discussion[];
  loading: boolean;
  error: string | null;
}

const initialState: DiscussionState = {
  discussions : [],
  loading: false,
  error: null,
};

export const fetchDiscussions = createAsyncThunk(
  "discussions/fetchDiscussions",
  async () => {
    const data = await ChatService.getDiscussion();
    return data;
  }
);

const chatSlice = createSlice({
  name: "discussions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscussions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDiscussions.fulfilled, (state, action) => {
        state.loading = false;
        state.discussions = action.payload;
      })
      .addCase(fetchDiscussions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch discussions";
      });
  },
});

export default chatSlice.reducer;
