import { createSlice } from '@reduxjs/toolkit';

const ALL_SECTIONS = ['VARC', 'DILR', 'QA'];
const SECTION_TIME = 2400; // 40 minutes

const loadPersistedState = () => {
  try {
    const saved = localStorage.getItem('examSession');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Only restore if schema is current (has activeSections field)
      if (parsed.examStatus === 'IN_PROGRESS' && Array.isArray(parsed.activeSections) && parsed.activeSections.length > 0) {
        return parsed;
      }
      // Clear stale/old-schema sessions
      localStorage.removeItem('examSession');
    }
  } catch (e) {
    localStorage.removeItem('examSession');
  }
  return null;
};

const defaultState = {
  examStatus: 'NOT_STARTED',
  examType: 'full',       // 'full' | 'sectional'
  mockId: 'mock-1',
  activeSections: ALL_SECTIONS,
  currentSectionIndex: 0,
  currentSectionId: ALL_SECTIONS[0],
  currentQuestionIndex: 0,
  timeRemainingInSeconds: SECTION_TIME,
  responses: {},
  questionPaletteState: {},
  sectionScores: {},
  startTime: null,
  questionStartTime: null,
};

const getInitialState = () => {
  const persisted = loadPersistedState();
  if (persisted) return persisted;
  return { ...defaultState };
};

const examSessionSlice = createSlice({
  name: 'examSession',
  initialState: getInitialState(),
  reducers: {
    configureExam: (state, action) => {
      const { examType, sections, mockId } = action.payload;
      state.examType = examType;
      state.mockId = mockId || 'mock-1';
      state.activeSections = sections || ALL_SECTIONS;
      state.currentSectionIndex = 0;
      state.currentSectionId = state.activeSections[0];
      state.currentQuestionIndex = 0;
      state.timeRemainingInSeconds = SECTION_TIME;
      state.responses = {};
      state.questionPaletteState = {};
      state.sectionScores = {};
      state.startTime = null;
      state.questionStartTime = null;
      state.examStatus = 'NOT_STARTED';
    },

    startExam: (state) => {
      state.examStatus = 'IN_PROGRESS';
      state.startTime = Date.now();
      state.questionStartTime = Date.now();
    },

    resumeExam: (state) => {
      state.questionStartTime = Date.now();
    },

    setCurrentQuestion: (state, action) => {
      const { questionIndex, questionId } = action.payload;
      if (state.questionStartTime) {
        const timeSpent = (Date.now() - state.questionStartTime) / 1000;
        const prevQId = Object.keys(state.questionPaletteState).find((_, idx) => idx === state.currentQuestionIndex);
        if (prevQId && state.responses[prevQId]) {
          state.responses[prevQId].timeTaken = (state.responses[prevQId].timeTaken || 0) + timeSpent;
        }
      }
      state.currentQuestionIndex = questionIndex;
      state.questionStartTime = Date.now();
      if (questionId && !state.questionPaletteState[questionId]) {
        state.questionPaletteState[questionId] = 'VISITED';
      } else if (questionId && state.questionPaletteState[questionId] === 'NOT_VISITED') {
        state.questionPaletteState[questionId] = 'VISITED';
      }
    },

    initializeQuestions: (state, action) => {
      const questionIds = action.payload;
      questionIds.forEach(id => {
        if (!state.questionPaletteState[id]) {
          state.questionPaletteState[id] = 'NOT_VISITED';
        }
      });
      if (questionIds.length > 0 && state.questionPaletteState[questionIds[0]] === 'NOT_VISITED') {
        state.questionPaletteState[questionIds[0]] = 'VISITED';
      }
    },

    recordResponse: (state, action) => {
      const { questionId, answer } = action.payload;
      const timeSpent = state.questionStartTime ? (Date.now() - state.questionStartTime) / 1000 : 0;
      state.responses[questionId] = {
        answer,
        timeTaken: (state.responses[questionId]?.timeTaken || 0) + timeSpent,
      };
      state.questionStartTime = Date.now();
      if (state.questionPaletteState[questionId] === 'MARKED_FOR_REVIEW' ||
          state.questionPaletteState[questionId] === 'ANSWERED_AND_MARKED') {
        state.questionPaletteState[questionId] = 'ANSWERED_AND_MARKED';
      } else {
        state.questionPaletteState[questionId] = 'ANSWERED';
      }
    },

    clearResponse: (state, action) => {
      const { questionId } = action.payload;
      delete state.responses[questionId];
      if (state.questionPaletteState[questionId] === 'ANSWERED_AND_MARKED') {
        state.questionPaletteState[questionId] = 'MARKED_FOR_REVIEW';
      } else {
        state.questionPaletteState[questionId] = 'VISITED';
      }
    },

    markForReview: (state, action) => {
      const { questionId } = action.payload;
      if (state.questionPaletteState[questionId] === 'ANSWERED' ||
          state.questionPaletteState[questionId] === 'ANSWERED_AND_MARKED') {
        state.questionPaletteState[questionId] = 'ANSWERED_AND_MARKED';
      } else {
        state.questionPaletteState[questionId] = 'MARKED_FOR_REVIEW';
      }
    },

    unmarkForReview: (state, action) => {
      const { questionId } = action.payload;
      if (state.questionPaletteState[questionId] === 'ANSWERED_AND_MARKED') {
        state.questionPaletteState[questionId] = 'ANSWERED';
      } else if (state.questionPaletteState[questionId] === 'MARKED_FOR_REVIEW') {
        state.questionPaletteState[questionId] = 'VISITED';
      }
    },

    decrementTimer: (state) => {
      if (state.timeRemainingInSeconds > 0) {
        state.timeRemainingInSeconds -= 1;
      }
    },

    forceSectionTransition: (state) => {
      const nextIndex = state.currentSectionIndex + 1;
      if (nextIndex < state.activeSections.length) {
        state.currentSectionIndex = nextIndex;
        state.currentSectionId = state.activeSections[nextIndex];
        state.currentQuestionIndex = 0;
        state.timeRemainingInSeconds = SECTION_TIME;
        state.questionStartTime = Date.now();
      } else {
        state.examStatus = 'COMPLETED';
        state.timeRemainingInSeconds = 0;
      }
    },

    submitExam: (state) => {
      state.examStatus = 'COMPLETED';
      state.timeRemainingInSeconds = 0;
    },

    setSectionScores: (state, action) => {
      state.sectionScores = action.payload;
    },

    resetExam: () => {
      localStorage.removeItem('examSession');
      return { ...defaultState };
    },
  },
});

export const {
  configureExam, startExam, resumeExam, setCurrentQuestion, initializeQuestions,
  recordResponse, clearResponse, markForReview, unmarkForReview,
  decrementTimer, forceSectionTransition, submitExam,
  setSectionScores, resetExam,
} = examSessionSlice.actions;

export const SECTIONS = ALL_SECTIONS;
export const SECTION_DURATION = SECTION_TIME;

export default examSessionSlice.reducer;
