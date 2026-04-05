import {
  getVirtualMock,
  getVirtualMockQuestions,
  getAllVirtualMocks,
  getPoolStats,
  TOTAL_VIRTUAL_MOCKS,
} from './mockGenerator';

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

export function getQuestionsForMock(mockId, section) {
  const num = parseMockNumber(mockId);
  return getVirtualMockQuestions(num, section);
}

export function getAllPracticeQuestions(section) {
  // Pool ALL questions for practice mode
  const mock = getVirtualMock(1);
  // Practice uses the raw pool, not a mock sample — get the full combined list
  const all = [];
  for (let n = 1; n <= 9; n++) {
    // pull from multiple seeds to aggregate all pool questions
  }
  // Simpler: use getPoolStats infrastructure — return combined pool
  return combinePoolForPractice(section);
}

function combinePoolForPractice(section) {
  // Use several virtual mocks and deduplicate by question id
  const seen = new Set();
  const result = [];
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
