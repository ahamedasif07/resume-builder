import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WorkExperience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  achievementFile: string | null;
}

const initialState: WorkExperience = {
  jobTitle: "",
  companyName: "",
  startDate: "",
  endDate: "",
  description: "",
  skills: [],
  achievementFile: null,
};

const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    setWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setWorkExperience } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
