import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  userName: string;
};

const initialState: AuthState = {
  token: null,
  userName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload.trim();
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userName = "";
    },
  },
});

export const { setToken, setUserName, logout } = authSlice.actions;
export default authSlice.reducer;
