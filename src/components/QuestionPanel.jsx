import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  recordResponse, clearResponse, markForReview, unmarkForReview,
  setCurrentQuestion,
} from '../store/examSessionSlice';

export default function QuestionPanel({ question, questionNumber, totalQuestions, allQuestions }) {
  const dispatch = useDispatch();
  const responses = useSelector((s) => s.examSession.responses);
  const paletteState = useSelector((s) => s.examSession.questionPaletteState);
  const currentQuestionIndex = useSelector((s) => s.examSession.currentQuestionIndex);

  const savedAnswer = responses[question.id]?.answer || '';
  const [selectedAnswer, setSelectedAnswer] = useState(savedAnswer);
  const [titaInput, setTitaInput] = useState(savedAnswer);

  useEffect(() => {
    const saved = responses[question.id]?.answer || '';
    setSelectedAnswer(saved);
    setTitaInput(saved);
  }, [question.id, responses]);

  const isMCQ = question.format === 'MCQ';
  const isMarked = paletteState[question.id] === 'MARKED_FOR_REVIEW' ||
                   paletteState[question.id] === 'ANSWERED_AND_MARKED';

  const handleSaveNext = () => {
    const answer = isMCQ ? selectedAnswer : titaInput.trim();
    if (answer) dispatch(recordResponse({ questionId: question.id, answer }));
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIdx = currentQuestionIndex + 1;
      dispatch(setCurrentQuestion({ questionIndex: nextIdx, questionId: allQuestions[nextIdx].id }));
    }
  };

  const handleClear = () => {
    setSelectedAnswer('');
    setTitaInput('');
    dispatch(clearResponse({ questionId: question.id }));
  };

  const handleMarkReview = () => {
    const answer = isMCQ ? selectedAnswer : titaInput.trim();
    if (answer) dispatch(recordResponse({ questionId: question.id, answer }));
    if (isMarked) dispatch(unmarkForReview({ questionId: question.id }));
    else dispatch(markForReview({ questionId: question.id }));
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIdx = currentQuestionIndex + 1;
      dispatch(setCurrentQuestion({ questionIndex: nextIdx, questionId: allQuestions[nextIdx].id }));
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      dispatch(setCurrentQuestion({ questionIndex: prevIdx, questionId: allQuestions[prevIdx].id }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIdx = currentQuestionIndex + 1;
      dispatch(setCurrentQuestion({ questionIndex: nextIdx, questionId: allQuestions[nextIdx].id }));
    }
  };

  const optionLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Question Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-700">
            Question {questionNumber}
          </span>
          <span className="text-xs text-slate-400">of {totalQuestions}</span>
        </div>
        <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wide ${
          isMCQ
            ? 'bg-blue-100 text-blue-700 border border-blue-200'
            : 'bg-amber-100 text-amber-700 border border-amber-200'
        }`}>
          {isMCQ ? 'MCQ · +3 / −1' : 'TITA · +3 / 0'}
        </span>
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="text-sm text-slate-800 mb-5 whitespace-pre-line leading-relaxed">
          {question.questionText}
        </div>

        {isMCQ && question.options && (
          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              const label = optionLabels[idx];
              const isSelected = selectedAnswer === label;
              return (
                <label
                  key={idx}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                      : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                    isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300 text-slate-500'
                  }`}>
                    {label}
                  </div>
                  <input
                    type="radio"
                    name={`q-${question.id}`}
                    value={label}
                    checked={isSelected}
                    onChange={() => setSelectedAnswer(label)}
                    className="sr-only"
                  />
                  <span className="text-sm text-slate-800 flex-1">{opt}</span>
                </label>
              );
            })}
          </div>
        )}

        {!isMCQ && (
          <div className="mt-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
              Your Answer
            </label>
            <input
              type="text"
              value={titaInput}
              onChange={(e) => setTitaInput(e.target.value)}
              placeholder="Type your answer"
              className="w-full max-w-xs border-2 border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
            />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="border-t border-slate-200 p-3 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex gap-2">
            <button
              onClick={handleMarkReview}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                isMarked
                  ? 'bg-violet-600 text-white border-violet-600 hover:bg-violet-700'
                  : 'bg-white text-violet-700 border-violet-300 hover:bg-violet-50'
              }`}
            >
              {isMarked ? '✓ Marked' : '⚑ Mark Review'}
            </button>
            <button
              onClick={handleClear}
              className="px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={handleSaveNext}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 cursor-pointer shadow-sm transition-all"
            >
              Save & Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
