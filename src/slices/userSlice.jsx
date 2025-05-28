import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user, index) => index !== action.payload);
    },
  },
});

export const { updateField, deleteUser } = formSlice.actions;
export default formSlice.reducer;
