import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import coachReducer from './slices/coachSlice';
import demandeReducer from './slices/demandSlice';
import programReducer from './slices/programSlice';
import exerciceReducer from './slices/exerciceSlice';
import notificationReducer from './slices/notificationSlice';
import chatSlice from './slices/chatSlice';
const store = configureStore({
  reducer: {
   auth:authReducer,
   coach:coachReducer,
   demande:demandeReducer,
   program:programReducer,
   exercice:exerciceReducer,
   notifications:notificationReducer,
   discussions:chatSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;