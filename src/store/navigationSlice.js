import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'dashboard', // dashboard, exam-start, exam, results, practice, solver
    examConfig: null, // { type: 'full' | 'sectional', section?: 'VARC'|'DILR'|'QA', mockId: 'mock-1' }
  },
  reducers: {
    navigateTo: (state, action) => {
      state.currentPage = action.payload;
    },
    setExamConfig: (state, action) => {
      state.examConfig = action.payload;
    },
    goHome: (state) => {
      state.currentPage = 'dashboard';
      state.examConfig = null;
    },
  },
});

export const { navigateTo, setExamConfig, goHome } = navigationSlice.actions;
export default navigationSlice.reducer;
