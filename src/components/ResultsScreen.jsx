import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetExam } from '../store/examSessionSlice';
import { goHome } from '../store/navigationSlice';
import { getQuestionsForMock } from '../data/index';
const SECTION_NAMES = {
  VARC: 'Verbal Ability & Reading Comprehension',
  DILR: 'Data Interpretation & Logical Reasoning',
  QA: 'Quantitative Aptitude',
};

// Historical percentile mapping (from the document)
const PERCENTILE_MAP = [
  { percentile: 99.9, score: 127 },
  { percentile: 99.5, score: 104 },
  { percentile: 99, score: 95 },
  { percentile: 97, score: 79 },
  { percentile: 95, score: 70 },
  { percentile: 90, score: 57 },
  { percentile: 80, score: 43 },
  { percentile: 70, score: 33 },
  { percentile: 60, score: 25 },
  { percentile: 50, score: 18 },
  { percentile: 40, score: 12 },
  { percentile: 30, score: 6 },
  { percentile: 20, score: 0 },
  { percentile: 10, score: -10 },
];

function estimatePercentile(score) {
  for (let i = 0; i < PERCENTILE_MAP.length; i++) {
    if (score >= PERCENTILE_MAP[i].score) return PERCENTILE_MAP[i].percentile;
  }
  return 5;
}

export default function ResultsScreen() {
  const dispatch = useDispatch();
  const responses = useSelector((s) => s.examSession.responses);
  const activeSections = useSelector((s) => s.examSession.activeSections);
  const mockId = useSelector((s) => s.examSession.mockId);
  const [activeTab, setActiveTab] = useState('overview');
  const [reviewSection, setReviewSection] = useState(activeSections[0]);

  const results = useMemo(() => {
    const sectionResults = {};
    let totalCorrect = 0, totalIncorrect = 0, totalUnattempted = 0, totalScore = 0;
    let totalQCount = 0;

    activeSections.forEach(section => {
      const questions = getQuestionsForMock(mockId, section);
      let correct = 0, incorrect = 0, unattempted = 0, score = 0;

      questions.forEach(q => {
        const response = responses[q.id];
        if (!response || !response.answer) {
          unattempted++;
        } else if (response.answer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
          correct++;
          score += 3;
        } else {
          incorrect++;
          if (q.format === 'MCQ') score -= 1;
        }
      });

      sectionResults[section] = {
        total: questions.length,
        correct,
        incorrect,
        unattempted,
        score,
        maxScore: questions.length * 3,
        accuracy: questions.length - unattempted > 0
          ? ((correct / (questions.length - unattempted)) * 100).toFixed(1)
          : 0,
      };

      totalCorrect += correct;
      totalIncorrect += incorrect;
      totalUnattempted += unattempted;
      totalScore += score;
      totalQCount += questions.length;
    });

    const percentile = estimatePercentile(totalScore);

    return { sectionResults, totalCorrect, totalIncorrect, totalUnattempted, totalScore, totalQCount, percentile };
  }, [responses, activeSections, mockId]);

  const reviewQuestions = useMemo(() => getQuestionsForMock(mockId, reviewSection), [reviewSection, mockId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a237e] text-white p-4 text-center">
        <h1 className="text-xl font-bold">Test Results & Analysis</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-300 flex justify-center gap-1 p-2">
        {[
          { id: 'overview', label: 'Score Overview' },
          { id: 'analysis', label: 'Section Analysis' },
          { id: 'review', label: 'Review Answers' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded cursor-pointer transition-colors ${
              activeTab === tab.id ? 'bg-[#1a237e] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-blue-600">
                <p className="text-gray-500 text-sm">Overall Score</p>
                <p className="text-4xl font-bold text-gray-800 mt-1">{results.totalScore}</p>
                <p className="text-gray-400 text-xs mt-1">out of {results.totalQCount * 3}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-green-500">
                <p className="text-gray-500 text-sm">Estimated Percentile</p>
                <p className="text-4xl font-bold text-green-600 mt-1">{results.percentile}%ile</p>
                <p className="text-gray-400 text-xs mt-1">based on CAT 2024 data</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-purple-500">
                <p className="text-gray-500 text-sm">Overall Accuracy</p>
                <p className="text-4xl font-bold text-purple-600 mt-1">
                  {(results.totalQCount - results.totalUnattempted) > 0
                    ? ((results.totalCorrect / (results.totalQCount - results.totalUnattempted)) * 100).toFixed(1)
                    : 0}%
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {results.totalCorrect} correct / {results.totalCorrect + results.totalIncorrect} attempted
                </p>
              </div>
            </div>

            {/* Summary Bar */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-green-600 font-semibold">Correct: {results.totalCorrect}</span>
                <span className="text-red-600 font-semibold">Incorrect: {results.totalIncorrect}</span>
                <span className="text-gray-500 font-semibold">Unattempted: {results.totalUnattempted}</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="bg-green-500 h-full" style={{ width: `${(results.totalCorrect / results.totalQCount) * 100}%` }}></div>
                <div className="bg-red-500 h-full" style={{ width: `${(results.totalIncorrect / results.totalQCount) * 100}%` }}></div>
                <div className="bg-gray-300 h-full" style={{ width: `${(results.totalUnattempted / results.totalQCount) * 100}%` }}></div>
              </div>
            </div>

            {/* Section-wise Scores */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Section</th>
                    <th className="p-3 text-center">Score</th>
                    <th className="p-3 text-center">Correct</th>
                    <th className="p-3 text-center">Incorrect</th>
                    <th className="p-3 text-center">Unattempted</th>
                    <th className="p-3 text-center">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {activeSections.map(section => {
                    const r = results.sectionResults[section];
                    return (
                      <tr key={section} className="border-t border-gray-200">
                        <td className="p-3 font-semibold">{SECTION_NAMES[section]}</td>
                        <td className="p-3 text-center font-bold">{r.score}/{r.maxScore}</td>
                        <td className="p-3 text-center text-green-600">{r.correct}</td>
                        <td className="p-3 text-center text-red-600">{r.incorrect}</td>
                        <td className="p-3 text-center text-gray-500">{r.unattempted}</td>
                        <td className="p-3 text-center">{r.accuracy}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Percentile Context */}
            <div className="bg-white rounded-lg shadow p-4 mt-6">
              <h3 className="font-bold text-gray-800 mb-3">Percentile Context (CAT 2024 Benchmarks)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {[
                  { p: '99.9%ile', s: '~127', inst: 'IIM A/B/C' },
                  { p: '99%ile', s: '~95', inst: 'Top IIMs' },
                  { p: '95%ile', s: '~70', inst: 'Baby IIMs' },
                  { p: '90%ile', s: '~57', inst: 'Private B-Schools' },
                ].map(item => (
                  <div key={item.p} className="bg-gray-50 rounded p-3 text-center">
                    <p className="font-bold text-gray-700">{item.p}</p>
                    <p className="text-gray-500">{item.s} marks</p>
                    <p className="text-gray-400 mt-1">{item.inst}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analysis Tab */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            {activeSections.map(section => {
              const r = results.sectionResults[section];
              const questions = getQuestionsForMock(mockId, section);
              const mcqCount = questions.filter(q => q.format === 'MCQ').length;
              const titaCount = questions.filter(q => q.format === 'TITA').length;

              return (
                <div key={section} className="bg-white rounded-lg shadow p-5">
                  <h3 className="font-bold text-gray-800 mb-3">{SECTION_NAMES[section]}</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{r.score}</p>
                      <p className="text-xs text-gray-500">Score (max {r.maxScore})</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{r.accuracy}%</p>
                      <p className="text-xs text-gray-500">Accuracy</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-700">{r.total - r.unattempted}/{r.total}</p>
                      <p className="text-xs text-gray-500">Attempted</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-500">{r.incorrect > 0 ? -r.incorrect : 0}</p>
                      <p className="text-xs text-gray-500">Negative Marks</p>
                    </div>
                  </div>

                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>MCQs: {mcqCount}</span>
                    <span>TITA: {titaCount}</span>
                  </div>

                  {/* Score bar */}
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all"
                      style={{ width: `${Math.max(0, (r.score / r.maxScore) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Review Tab */}
        {activeTab === 'review' && (
          <div>
            <div className="flex gap-2 mb-4">
              {activeSections.map(s => (
                <button
                  key={s}
                  onClick={() => setReviewSection(s)}
                  className={`px-4 py-2 text-sm rounded font-semibold cursor-pointer ${
                    reviewSection === s ? 'bg-[#1a237e] text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {reviewQuestions.map((q, idx) => {
                const response = responses[q.id];
                const userAnswer = response?.answer || null;
                const isCorrect = userAnswer?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                const isUnattempted = !userAnswer;

                return (
                  <div key={q.id} className={`bg-white rounded-lg shadow p-4 border-l-4 ${
                    isUnattempted ? 'border-gray-400' : isCorrect ? 'border-green-500' : 'border-red-500'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-bold text-gray-700">Q{idx + 1}.</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        isUnattempted ? 'bg-gray-100 text-gray-600' :
                        isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {isUnattempted ? 'Unattempted' : isCorrect ? '+3' : q.format === 'MCQ' ? '-1' : '0'}
                      </span>
                    </div>

                    <p className="text-sm text-gray-800 mb-3 whitespace-pre-line">{q.questionText}</p>

                    {/* Options for MCQ */}
                    {q.format === 'MCQ' && q.options && (
                      <div className="space-y-1 mb-3">
                        {q.options.map((opt, i) => {
                          const label = ['A', 'B', 'C', 'D', 'E'][i];
                          const isCorrectOpt = label === q.correctAnswer;
                          const isUserChoice = label === userAnswer;
                          return (
                            <div key={i} className={`text-xs p-2 rounded ${
                              isCorrectOpt ? 'bg-green-50 border border-green-300 font-semibold' :
                              isUserChoice && !isCorrect ? 'bg-red-50 border border-red-300 line-through' :
                              'bg-gray-50'
                            }`}>
                              <span className="font-semibold mr-1">{label}.</span> {opt}
                              {isCorrectOpt && <span className="ml-2 text-green-600">✓ Correct</span>}
                              {isUserChoice && !isCorrect && <span className="ml-2 text-red-600">✗ Your answer</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* TITA answers */}
                    {q.format === 'TITA' && (
                      <div className="text-xs mb-3 space-y-1">
                        <p>
                          <span className="text-gray-500">Correct Answer:</span>{' '}
                          <span className="font-bold text-green-700">{q.correctAnswer}</span>
                        </p>
                        {userAnswer && (
                          <p>
                            <span className="text-gray-500">Your Answer:</span>{' '}
                            <span className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                              {userAnswer}
                            </span>
                          </p>
                        )}
                      </div>
                    )}

                    {/* Solution */}
                    {q.solution && (
                      <details className="text-xs">
                        <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800">
                          View Solution
                        </summary>
                        <div className="mt-2 p-3 bg-blue-50 rounded">
                          <p className="text-gray-700">{q.solution.detailedExplanation}</p>
                          {q.solution.shortcutMethod && (
                            <p className="mt-2 text-gray-600">
                              <span className="font-semibold">Shortcut:</span> {q.solution.shortcutMethod}
                            </p>
                          )}
                        </div>
                      </details>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Retake Button */}
        <div className="text-center my-8 flex justify-center gap-4">
          <button
            onClick={() => { dispatch(resetExam()); dispatch(goHome()); }}
            className="px-6 py-3 border-2 border-[#1a237e] text-[#1a237e] rounded-lg font-bold hover:bg-blue-50 cursor-pointer"
          >
            &larr; Dashboard
          </button>
          <button
            onClick={() => dispatch(resetExam())}
            className="px-6 py-3 bg-[#1a237e] text-white rounded-lg font-bold hover:bg-[#283593] cursor-pointer"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}
