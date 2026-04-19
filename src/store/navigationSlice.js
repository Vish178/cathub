import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'dashboard', // dashboard | quant | exam-start | exam | results | practice | solver | topic-mock
    examConfig: null,          // { type, section?, mockId?, topicId? }
    quantCategory: null,        // active Quant category being browsed
    topicId: null,              // active topic when in topic-mock mode
  },
  reducers: {
    navigateTo: (state, action) => {
      state.currentPage = action.payload;
    },
    setExamConfig: (state, action) => {
      state.examConfig = action.payload;
    },
    setQuantCategory: (state, action) => {
      state.quantCategory = action.payload;
    },
    setTopicId: (state, action) => {
      state.topicId = action.payload;
    },
    goHome: (state) => {
      state.currentPage = 'dashboard';
      state.examConfig = null;
      state.quantCategory = null;
      state.topicId = null;
    },
  },
});

export const { navigateTo, setExamConfig, setQuantCategory, setTopicId, goHome } = navigationSlice.actions;
export default navigationSlice.reducer;
