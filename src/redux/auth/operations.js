import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setAuthHeader, clearAuthHeader } from "../../api/api";

// Реєстрація
export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Логін
export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Логаут
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Оновлення користувача (refreshUser)
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  setAuthHeader(token);

  try {
    const { data } = await api.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});




/*import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setAuthHeader, clearAuthHeader } from "../../api/api";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/signup", credentials);
    setAuthHeader(data.token); // Зберігаємо токен
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", credentials);
    setAuthHeader(data.token); // Зберігаємо токен
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader(); // Очищаємо токен
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});*/



/*import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

// Utility для збереження/видалення токена
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Реєстрація
export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Логін
export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Логаут
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Оновлення користувача (refresh)
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  setAuthHeader(token);

  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});*/
