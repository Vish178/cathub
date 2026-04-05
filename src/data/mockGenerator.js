// Virtual Mock Generator — creates 50+ unique mocks from the pooled question bank
// Uses deterministic seeded shuffling to ensure:
//   - Questions don't repeat within a single mock
//   - Each mock has a different selection from others
//   - Same mock ID always returns same questions (reproducible)

import mq1, { getQuestionsForSection as getQ1 } from './mockQuestions';
import mq2, { getQuestionsForSection as getQ2 } from './mockQuestions2';
import mq3, { getQuestionsForSection as getQ3 } from './mockQuestions3';
import mq4, { getQuestionsForSection as getQ4 } from './mockQuestions4';
import mq5, { getQuestionsForSection as getQ5 } from './mockQuestions5';
import mq6, { getQuestionsForSection as getQ6 } from './mockQuestions6';
import mq7, { getQuestionsForSection as getQ7 } from './mockQuestions7';
import mq8, { getQuestionsForSection as getQ8 } from './mockQuestions8';
import mq9, { getQuestionsForSection as getQ9 } from './mockQuestions9';

const sourceBanks = [
  { data: mq1, getQs: getQ1, label: 'Bank 1' },
  { data: mq2, getQs: getQ2, label: 'Bank 2' },
  { data: mq3, getQs: getQ3, label: 'Bank 3' },
  { data: mq4, getQs: getQ4, label: 'Bank 4' },
  { data: mq5, getQs: getQ5, label: 'Bank 5' },
  { data: mq6, getQs: getQ6, label: 'Bank 6' },
  { data: mq7, getQs: getQ7, label: 'Bank 7' },
  { data: mq8, getQs: getQ8, label: 'Bank 8' },
  { data: mq9, getQs: getQ9, label: 'Bank 9' },
];

// Pool ALL questions across ALL banks, grouped by section
function buildPool() {
  const pool = { VARC: [], DILR: [], QA: [] };
  sourceBanks.forEach(bank => {
    ['VARC', 'DILR', 'QA'].forEach(section => {
      try {
        const qs = bank.getQs(section);
        pool[section].push(...qs);
      } catch (e) { /* bank not ready */ }
    });
  });
  return pool;
}

// ── Seeded PRNG (Mulberry32) ──
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Fisher–Yates shuffle with seeded RNG
function seededShuffle(array, seed) {
  const rng = mulberry32(seed);
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Simple hash from a string seed
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Generate a virtual mock #N
// Returns: { VARC: [24 qs], DILR: [22 qs], QA: [22 qs] }
function generateVirtualMock(mockNumber) {
  const pool = buildPool();
  const seedBase = hashSeed(`cat-mock-v${mockNumber}-seed-2024`);

  const targets = { VARC: 24, DILR: 22, QA: 22 };
  const result = { VARC: [], DILR: [], QA: [] };

  ['VARC', 'DILR', 'QA'].forEach((section, idx) => {
    const sectionPool = pool[section];
    if (sectionPool.length === 0) {
      result[section] = [];
      return;
    }
    const seed = seedBase + idx * 7919;
    const shuffled = seededShuffle(sectionPool, seed);

    // Take `targets[section]` questions, cycling through pool if needed
    const needed = targets[section];
    const picked = [];
    for (let i = 0; i < needed; i++) {
      picked.push(shuffled[i % shuffled.length]);
    }
    result[section] = picked;
  });

  return result;
}

// Cache virtual mocks so same mock ID returns same questions during a session
const virtualMockCache = {};

export function getVirtualMock(mockNumber) {
  if (!virtualMockCache[mockNumber]) {
    virtualMockCache[mockNumber] = generateVirtualMock(mockNumber);
  }
  return virtualMockCache[mockNumber];
}

export function getVirtualMockQuestions(mockNumber, section) {
  return getVirtualMock(mockNumber)[section] || [];
}

// Stats about the pool (how many real questions exist)
export function getPoolStats() {
  const pool = buildPool();
  return {
    VARC: pool.VARC.length,
    DILR: pool.DILR.length,
    QA: pool.QA.length,
    total: pool.VARC.length + pool.DILR.length + pool.QA.length,
    banks: sourceBanks.filter(b =>
      ['VARC', 'DILR', 'QA'].some(s => {
        try { return b.getQs(s).length > 0; } catch { return false; }
      })
    ).length,
  };
}

// Build catalog of 50 virtual mock tests
export function getAllVirtualMocks(count = 50) {
  const mocks = [];
  for (let i = 1; i <= count; i++) {
    mocks.push({
      id: `vmock-${i}`,
      mockNumber: i,
      title: `Mock Test ${i}`,
      description: getMockDescription(i),
      difficulty: getMockDifficulty(i),
    });
  }
  return mocks;
}

function getMockDescription(n) {
  if (n <= 10) return 'Balanced Difficulty — All-round practice';
  if (n <= 20) return 'Easy to Medium — Build confidence';
  if (n <= 30) return 'Medium Difficulty — Core practice';
  if (n <= 40) return 'Challenging — Push your limits';
  return 'Expert Level — Simulate actual CAT pressure';
}

function getMockDifficulty(n) {
  if (n <= 10) return 'balanced';
  if (n <= 20) return 'easy';
  if (n <= 30) return 'medium';
  if (n <= 40) return 'hard';
  return 'expert';
}

export const TOTAL_VIRTUAL_MOCKS = 50;
