import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeQuestions, submitExam, setCurrentQuestion } from '../store/examSessionSlice';
import { getQuestionsForMock } from '../data/index';
import Header from './Header';
import PassagePanel from './PassagePanel';
import QuestionPanel from './QuestionPanel';
import QuestionPalette from './QuestionPalette';
import Calculator from './Calculator';

export default function ExamScreen() {
  const dispatch = useDispatch();
  const currentSection = useSelector((s) => s.examSession.currentSectionId);
  const currentQuestionIndex = useSelector((s) => s.examSession.currentQuestionIndex);
  const mockId = useSelector((s) => s.examSession.mockId);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const questions = useMemo(() => getQuestionsForMock(mockId, currentSection), [currentSection, mockId]);

  useEffect(() => {
    const ids = questions.map((q) => q.id);
    dispatch(initializeQuestions(ids));
    if (currentQuestionIndex === 0 && questions.length > 0) {
      dispatch(setCurrentQuestion({ questionIndex: 0, questionId: questions[0].id }));
    }
  }, [currentSection]);

  const currentQuestion = questions[currentQuestionIndex];
  const pc = currentQuestion?.parentContent;
  const hasPassage = !!(pc?.textPayload || pc?.chart || pc?.diagram);

  const handleSubmit = () => {
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    setShowSubmitModal(false);
    dispatch(submitExam());
  };

  if (!currentQuestion) return <div className="p-8 text-center">Loading questions...</div>;

  return (
    <div className="exam-mode h-screen flex flex-col bg-slate-100 text-slate-900">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Main area: Passage + Question */}
        <div className="flex-1 flex overflow-hidden">
          {/* Passage Panel (60% when visible) */}
          {hasPassage && (
            <div className="w-[60%] border-r border-gray-300">
              <PassagePanel content={currentQuestion.parentContent} />
            </div>
          )}

          {/* Question Panel */}
          <div className={`${hasPassage ? 'w-[40%]' : 'w-full'} flex flex-col`}>
            <QuestionPanel
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              allQuestions={questions}
            />
          </div>
        </div>

        {/* Question Palette (right sidebar) */}
        <div className="w-52 flex-shrink-0">
          <QuestionPalette questions={questions} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-lg">
        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className="px-3 py-1.5 text-xs font-semibold bg-slate-700 text-white rounded-lg hover:bg-slate-800 cursor-pointer transition-colors flex items-center gap-1.5"
        >
          <span>🧮</span> {showCalculator ? 'Hide' : 'Calculator'}
        </button>
        <button
          onClick={handleSubmit}
          className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-lg hover:from-rose-600 hover:to-red-700 cursor-pointer shadow-md transition-all"
        >
          Submit Test
        </button>
      </div>

      {/* Calculator */}
      {showCalculator && <Calculator onClose={() => setShowCalculator(false)} />}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">⚠️</div>
              <h3 className="text-lg font-bold text-slate-900">Submit Test?</h3>
            </div>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Are you sure you want to submit? You will not be able to change your answers after submission. Any remaining sections will also be submitted.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 text-sm bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-lg hover:from-rose-600 hover:to-red-700 cursor-pointer font-bold shadow-md"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
