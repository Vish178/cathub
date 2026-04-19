// Topic-wise question pooling
// Sources: (1) dedicated topic banks in topicQuestions/, (2) existing QA mock questions (matched by keyword)

import { TOPIC_TAG_MAP, getTopicById } from './quantTopics';
import { getVirtualMockQuestions } from './mockGenerator';
import arithmeticTopics from './topicQuestions/arithmetic';
import algebraTopics from './topicQuestions/algebra';
import geometryTopics from './topicQuestions/geometry';
import numberSystemTopics from './topicQuestions/numberSystem';
import modernMathsTopics from './topicQuestions/modernMaths';

// Merged dedicated banks
const dedicatedBanks = {
  ...arithmeticTopics,
  ...algebraTopics,
  ...geometryTopics,
  ...numberSystemTopics,
  ...modernMathsTopics,
};

// Collect all QA questions from all mock banks (deduped)
function getAllQAQuestions() {
  const seen = new Set();
  const all = [];
  for (let n = 1; n <= 20; n++) {
    const qs = getVirtualMockQuestions(n, 'QA');
    qs.forEach((q) => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        all.push(q);
      }
    });
  }
  return all;
}

// Match a mock-bank question to topics by keyword scanning
function matchQuestionToTopics(q) {
  const tag = (q.analyticsMetadata?.topicTag || '').toLowerCase();
  const text = (q.questionText || '').toLowerCase().slice(0, 300);
  const hay = tag + ' ' + text;
  const matches = [];
  for (const [topicId, keywords] of Object.entries(TOPIC_TAG_MAP)) {
    if (keywords.some((kw) => hay.includes(kw.toLowerCase()))) {
      matches.push(topicId);
    }
  }
  return matches;
}

let _topicPool = null;
export function getTopicPool() {
  if (_topicPool) return _topicPool;

  const pool = {};
  for (const topicId of Object.keys(TOPIC_TAG_MAP)) pool[topicId] = [];

  // (1) Start with dedicated bank questions (highest priority — topic-specific)
  for (const [topicId, questions] of Object.entries(dedicatedBanks)) {
    if (pool[topicId]) pool[topicId].push(...questions.map((q) => ({ ...q, topicSource: 'dedicated' })));
  }

  // (2) Supplement with mock-bank QA questions matched by keyword
  const allQA = getAllQAQuestions();
  const seen = new Set();
  for (const topicId of Object.keys(pool)) {
    pool[topicId].forEach((q) => seen.add(`${topicId}::${q.id}`));
  }
  allQA.forEach((q) => {
    const topics = matchQuestionToTopics(q);
    topics.forEach((topicId) => {
      const key = `${topicId}::${q.id}`;
      if (!seen.has(key)) {
        seen.add(key);
        pool[topicId].push({ ...q, topicSource: 'mock' });
      }
    });
  });

  _topicPool = pool;
  return pool;
}

export function getQuestionsForTopic(topicId, count = 15) {
  const pool = getTopicPool();
  const questions = pool[topicId] || [];
  return questions.slice(0, count);
}

export function getTopicStats() {
  const pool = getTopicPool();
  const stats = {};
  for (const [topicId, questions] of Object.entries(pool)) {
    const topic = getTopicById(topicId);
    stats[topicId] = {
      count: questions.length,
      topic,
    };
  }
  return stats;
}
