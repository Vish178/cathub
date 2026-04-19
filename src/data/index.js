import {
  getVirtualMock,
  getVirtualMockQuestions,
  getAllVirtualMocks,
  getPoolStats,
  TOTAL_VIRTUAL_MOCKS,
} from './mockGenerator';
import { getAllDILRChartQuestions } from './dilrChartsBank';

// Primary API — "mock-1" through "mock-50" (or vmock-*)
export function getMockTest(mockId) {
  const num = parseMockNumber(mockId);
  return {
    id: mockId,
    title: `Mock Test ${num}`,
    mockNumber: num,
  };
}

function parseMockNumber(mockId) {
  if (!mockId) return 1;
  const match = String(mockId).match(/\d+/);
  return match ? parseInt(match[0]) : 1;
}

export function getAllMockTests() {
  return getAllVirtualMocks(TOTAL_VIRTUAL_MOCKS);
}

export function getMocksByEra() {
  const mocks = getAllVirtualMocks(TOTAL_VIRTUAL_MOCKS);
  return {
    'Balanced (1-10)': mocks.slice(0, 10),
    'Easy–Medium (11-20)': mocks.slice(10, 20),
    'Medium (21-30)': mocks.slice(20, 30),
    'Challenging (31-40)': mocks.slice(30, 40),
    'Expert (41-50)': mocks.slice(40, 50),
  };
}

// Cache DILR charts bank questions once
let _dilrChartsQuestions = null;
function getDILRChartsQuestions() {
  if (_dilrChartsQuestions) return _dilrChartsQuestions;
  try {
    _dilrChartsQuestions = getAllDILRChartQuestions();
  } catch (e) {
    _dilrChartsQuestions = [];
  }
  return _dilrChartsQuestions;
}

export function getQuestionsForMock(mockId, section) {
  const num = parseMockNumber(mockId);

  // DILR section uses the dedicated charts bank (CAT format: 5 sets, 22 Qs, real charts).
  // If it's available (22 questions), use it for the first mock; otherwise fall back.
  if (section === 'DILR') {
    const chartsQs = getDILRChartsQuestions();
    if (chartsQs.length >= 22) return chartsQs;
  }

  return getVirtualMockQuestions(num, section);
}

export function getAllPracticeQuestions(section) {
  return combinePoolForPractice(section);
}

function combinePoolForPractice(section) {
  const seen = new Set();
  const result = [];

  // Include DILR charts bank questions first (they have visual context)
  if (section === 'DILR') {
    getDILRChartsQuestions().forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        result.push(q);
      }
    });
  }

  for (let n = 1; n <= 20; n++) {
    const qs = getVirtualMockQuestions(n, section);
    qs.forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        result.push(q);
      }
    });
  }
  return result;
}

export { getPoolStats, TOTAL_VIRTUAL_MOCKS };
export default getAllMockTests;
