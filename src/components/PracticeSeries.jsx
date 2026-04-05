import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goHome } from '../store/navigationSlice';
import { getAllPracticeQuestions } from '../data/index';

const SECTION_FULL = {
  VARC: 'Verbal Ability & Reading Comprehension',
  DILR: 'Data Interpretation & Logical Reasoning',
  QA: 'Quantitative Aptitude',
};

export default function PracticeSeries() {
  const dispatch = useDispatch();
  const examConfig = useSelector((s) => s.navigation.examConfig);
  const section = examConfig?.section || 'VARC';

  const questions = useMemo(() => getAllPracticeQuestions(section), [section]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [attempted, setAttempted] = useState(false);

  const q = questions[currentIndex];
  if (!q) return <div className="p-8 text-center">No questions available.</div>;

  const isMCQ = q.format === 'MCQ';
  const optionLabels = ['A', 'B', 'C', 'D', 'E'];
  const isCorrect = selectedOption === q.correctAnswer;

  const goToQuestion = (idx) => {
    setCurrentIndex(idx);
    setShowAnswer(false);
    setShowExplanation(false);
    setSelectedOption(null);
    setAttempted(false);
  };

  const handleCheck = () => {
    setAttempted(true);
    setShowAnswer(true);
  };

  const handleRevealAll = () => {
    setShowAnswer(true);
    setShowExplanation(true);
    setAttempted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a237e] text-white flex items-center justify-between px-4 py-3">
        <div>
          <button onClick={() => dispatch(goHome())} className="text-sm text-blue-200 hover:text-white cursor-pointer mr-4">
            &larr; Back to Dashboard
          </button>
          <span className="font-bold">Practice: {section}</span>
          <span className="text-xs text-blue-200 ml-2">{SECTION_FULL[section]}</span>
        </div>
        <span className="text-sm">{currentIndex + 1} / {questions.length}</span>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        <div className="flex gap-4">
          {/* Main Content */}
          <div className="flex-1">
            {/* Passage if any */}
            {q.parentContent?.textPayload && (
              <div className="bg-white rounded-lg shadow p-4 mb-4 border-l-4 border-blue-400">
                <p className="text-xs text-blue-600 font-semibold mb-2 uppercase">Passage / Data Set</p>
                <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line max-h-80 overflow-y-auto">
                  {q.parentContent.textPayload}
                </div>
              </div>
            )}

            {/* Question Card */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500">
                  Q{currentIndex + 1} | {q.format} | Difficulty: {'★'.repeat(Math.round(q.difficultyRating || 3))}{'☆'.repeat(5 - Math.round(q.difficultyRating || 3))}
                </span>
                {q.mockSource && (
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{q.mockSource}</span>
                )}
              </div>

              <p className="text-sm text-gray-800 mb-4 whitespace-pre-line leading-relaxed">{q.questionText}</p>

              {/* MCQ Options */}
              {isMCQ && q.options && (
                <div className="space-y-2 mb-4">
                  {q.options.map((opt, idx) => {
                    const label = optionLabels[idx];
                    const isSelected = selectedOption === label;
                    const isCorrectOpt = label === q.correctAnswer;

                    let optStyle = 'border-gray-300 hover:bg-gray-50';
                    if (attempted && showAnswer) {
                      if (isCorrectOpt) optStyle = 'border-green-500 bg-green-50';
                      else if (isSelected && !isCorrect) optStyle = 'border-red-500 bg-red-50';
                    } else if (isSelected) {
                      optStyle = 'border-blue-500 bg-blue-50';
                    }

                    return (
                      <label key={idx} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${optStyle}`}>
                        <input
                          type="radio"
                          name="practice-q"
                          value={label}
                          checked={isSelected}
                          onChange={() => { if (!attempted) setSelectedOption(label); }}
                          disabled={attempted}
                          className="mt-0.5 accent-blue-600"
                        />
                        <span className="text-sm">
                          <span className="font-semibold mr-1">{label}.</span>{opt}
                        </span>
                        {attempted && showAnswer && isCorrectOpt && (
                          <span className="ml-auto text-green-600 text-xs font-bold">Correct</span>
                        )}
                        {attempted && showAnswer && isSelected && !isCorrect && (
                          <span className="ml-auto text-red-600 text-xs font-bold">Wrong</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              )}

              {/* TITA - show answer directly */}
              {!isMCQ && showAnswer && (
                <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded-lg">
                  <span className="text-sm text-gray-600">Answer: </span>
                  <span className="text-lg font-bold text-green-700">{q.correctAnswer}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                {!attempted && isMCQ && (
                  <button
                    onClick={handleCheck}
                    disabled={!selectedOption}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Check Answer
                  </button>
                )}
                <button
                  onClick={handleRevealAll}
                  className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg font-semibold hover:bg-gray-600 cursor-pointer"
                >
                  {showExplanation ? 'Showing All' : 'Reveal Answer & Explanation'}
                </button>
              </div>

              {/* Explanation */}
              {showExplanation && q.solution && (
                <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-bold text-amber-800 text-sm mb-2">Explanation</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{q.solution.detailedExplanation}</p>
                  {q.solution.shortcutMethod && (
                    <div className="mt-3 p-3 bg-white rounded border border-amber-200">
                      <p className="text-xs font-semibold text-amber-700 mb-1">Shortcut Method</p>
                      <p className="text-sm text-gray-700">{q.solution.shortcutMethod}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Result feedback */}
              {attempted && showAnswer && isMCQ && (
                <div className={`mt-4 p-3 rounded-lg text-sm font-semibold ${
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {isCorrect ? 'Correct! +3 marks' : `Incorrect. The answer is ${q.correctAnswer}. ${q.format === 'MCQ' ? '-1 mark' : '0 marks'}`}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => goToQuestion(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                &larr; Previous
              </button>
              <button
                onClick={() => goToQuestion(currentIndex + 1)}
                disabled={currentIndex === questions.length - 1}
                className="px-4 py-2 bg-[#1a237e] text-white rounded-lg text-sm font-semibold hover:bg-[#283593] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          {/* Question Navigator Sidebar */}
          <div className="w-48 flex-shrink-0 hidden md:block">
            <div className="bg-white rounded-lg shadow p-3 sticky top-4">
              <p className="text-xs font-bold text-gray-600 mb-2">Questions</p>
              <div className="grid grid-cols-5 gap-1.5">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToQuestion(idx)}
                    className={`w-8 h-8 text-xs rounded font-semibold cursor-pointer transition-colors ${
                      idx === currentIndex
                        ? 'bg-[#1a237e] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
