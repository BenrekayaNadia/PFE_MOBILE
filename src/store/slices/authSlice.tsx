import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "@/services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
interface AuthState {
  token: string | null;
  role: string | null;
  loading: boolean;
}
interface ResponseData {
  token: string;
  exipresIn: number;
}

interface RequestBody {
  email: string;
  password: string;
}
const initialState: AuthState = {
  token: null,
  loading: false,
  role: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: RequestBody) => {
    const data = await AuthService.login(email, password);
    console.log(data);
    await AuthService.setToken(data.token);
     const decoded :any= AuthService.decodeToken(data.token);
     console.log(decoded);

    const deviceToken = await messaging().getToken();
    if (deviceToken) {
      await AuthService.saveDeviceToken(deviceToken);
    }

     return { token: data.token, role : decoded.role };
    //return data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userDetails: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    role: string;
  }) => {
    const data = await AuthService.register(userDetails);
    /* console.log(data) */
    await AuthService.setToken(data.token);
     const decoded : any = AuthService.decodeToken(data.token);
     return { token: data.token, role: decoded.role };
   // return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role } = action.payload;
      state.token = token;
      state.role = role;
    },
    setToken: (state, action) => {
      const token = action.payload;
      console.log(token)
      const decoded : any = AuthService.decodeToken(token);
      console.log(decoded);
      state.token = token;
      state.role = decoded.role;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      //AsyncStorage.removeItem("token");
      AuthService.removeToken();
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
         state.role = action.payload.role;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setToken, setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
