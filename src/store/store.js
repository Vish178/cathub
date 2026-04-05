import { configureStore } from '@reduxjs/toolkit';
import examSessionReducer from './examSessionSlice';
import navigationReducer from './navigationSlice';

const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  if (state.examSession.examStatus === 'IN_PROGRESS') {
    try {
      localStorage.setItem('examSession', JSON.stringify(state.examSession));
    } catch (e) { /* quota exceeded, ignore */ }
  }
  return result;
};

export const store = configureStore({
  reducer: {
    examSession: examSessionReducer,
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(persistMiddleware),
});
