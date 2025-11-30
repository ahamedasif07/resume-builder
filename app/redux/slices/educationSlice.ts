import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "education",
  initialState: [],
  reducers: {
    setEducation: (state, action) => {
      return action.payload;
    },
  },
});

export const { setEducation } = educationSlice.actions;
export default educationSlice.reducer;
