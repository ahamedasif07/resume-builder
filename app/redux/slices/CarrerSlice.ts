import { createSlice } from "@reduxjs/toolkit";

const careerSlice = createSlice({
  name: "career",
  initialState: {
    jobTitle: "",
    summary: "",
  },
  reducers: {
    setCareerInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCareerInfo } = careerSlice.actions;
export default careerSlice.reducer;
