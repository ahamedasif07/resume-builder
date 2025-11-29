import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Experience {
  company: string;
  role: string;
  years: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface ResumeState {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  jobTitle: string;
  careerSummary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  contact: {
    email: string;
    phone: string;
  };
}

const initialState: ResumeState = {
  personal: {
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
  jobTitle: "",
  careerSummary: "",
  skills: [],
  experience: [],
  education: [],
  contact: {
    email: "",
    phone: "",
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setPersonalInfo: (
      state,
      action: PayloadAction<Partial<ResumeState["personal"]>>
    ) => {
      Object.assign(state.personal, action.payload);
    },
    setJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
    setCareerSummary: (state, action: PayloadAction<string>) => {
      state.careerSummary = action.payload;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experience.push(action.payload);
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.education.push(action.payload);
    },
    setContactInfo: (
      state,
      action: PayloadAction<Partial<ResumeState["contact"]>>
    ) => {
      Object.assign(state.contact, action.payload);
    },
  },
});

export const {
  setPersonalInfo,
  setJobTitle,
  setCareerSummary,
  addSkill,
  removeSkill,
  addExperience,
  addEducation,
  setContactInfo,
} = resumeSlice.actions;

export default resumeSlice.reducer;
