import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  isAuth: token ? true : false,
  error: "",
  isError: false,
  user: user ? user : null,
};

export const register = createAsyncThunk("user/register", async (userData) => {
  const { data } = await axios.post("/user/register", userData);
  return data;
});

export const login = createAsyncThunk("user/login", async (userData) => {
  const { data } = await axios.post("/user/login", userData);

  return data;
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.isError = false;
      state.error = "";
      state.isLoading = false;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isAuth = false;
      state.isError = true;
      state.error = action.payload;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("got fulfilled");

      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;

      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("got rejected");
      state.isLoading = false;
      state.user = null;
      state.isAuth = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
