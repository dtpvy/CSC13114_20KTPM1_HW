import { createSlice } from "@reduxjs/toolkit";

type User = {
  username: string;
  password: string;
};

type State = {
  user: User | null;
  status: "unauthorized" | "authorized" | "loading";
};

const initialState: State = {
  user: null,
  status: "loading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    load(state) {
      const token = localStorage.getItem("token");
      const data = token ? JSON.parse(token) : token;
      if (data) {
        state.user = data;
        state.status = "authorized";
      } else {
        state.user = null;
        state.status = "unauthorized";
      }
    },
    logout(state) {
      localStorage.setItem("token", "");
      state.user = null;
      state.status = "unauthorized";
    },
    set(state, { payload }) {
      localStorage.setItem("token", JSON.stringify(payload));
      state.user = payload;
      state.status = "authorized";
    },
  },
});

export const { load: loadUser, set: setUser, logout } = userSlice.actions;
export default userSlice.reducer;
