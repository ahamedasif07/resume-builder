import { createSlice } from "@reduxjs/toolkit";

const personalSlice = createSlice({
  name: "personal",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPersonalInfo } = personalSlice.actions;
export default personalSlice.reducer;
