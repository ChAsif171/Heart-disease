import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: '',
  sex: '',
  c: '',
  trestbps: '',
  chol: '',
  fbs: '',
  restecg: '',
  thalach: '',
  exang: '',
  oldpeak: '',
  slope: '',
  ca: '',
  thal: '',
  tes:'',
  target: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAge: (state, action) => {
      state.age = action.payload;
    },
    setUserSex: (state, action) => {
      state.sex = action.payload;
    },
    setC: (state, action) => {
      state.c = action.payload;
    },
    setTrestbps: (state, action) => {
      state.trestbps = action.payload;
    },
    setChol: (state, action) => {
      state.chol = action.payload;
    },
    setFbs: (state, action) => {
      state.fbs = action.payload;
    },
    setRestecg: (state, action) => {
      state.restecg = action.payload;
    },
    setThalach: (state, action) => {
      state.thalach = action.payload;
    },
    setExang: (state, action) => {
      state.exang = action.payload;
    },
    setOldpeak: (state, action) => {
      state.oldpeak = action.payload;
    },
    setSlope: (state, action) => {
      state.slope = action.payload;
    },
    setCa: (state, action) => {
      state.ca = action.payload;
    },
    setThal: (state, action) => {
      state.thal = action.payload;
    },
    setTes: (state, action) => {
      state.tes = action.payload;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    },
  },
});

export const {
  setUserAge,
  setUserSex,
  setC,
  setTrestbps,
  setChol,
  setFbs,
  setRestecg,
  setThalach,
  setExang,
  setOldpeak,
  setSlope,
  setCa,
  setThal,
  setTes,
  setTarget,
} = userSlice.actions;

export default userSlice.reducer;
