import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuestion } from '../store/examSessionSlice';

const STATUS_STYLES = {
  NOT_VISITED: 'bg-white border-2 border-slate-300 text-slate-600',
  VISITED: 'bg-gradient-to-br from-rose-500 to-red-600 text-white border-transparent shadow-sm',
  ANSWERED: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent shadow-sm',
  MARKED_FOR_REVIEW: 'bg-gradient-to-br from-purple-500 to-violet-600 text-white border-transparent shadow-sm',
  ANSWERED_AND_MARKED: 'bg-gradient-to-br from-purple-500 to-violet-600 text-white border-transparent shadow-sm',
};

export default function QuestionPalette({ questions }) {
  const dispatch = useDispatch();
  const paletteState = useSelector((s) => s.examSession.questionPaletteState);
  const currentQuestionIndex = useSelector((s) => s.examSession.currentQuestionIndex);

  const counts = { ANSWERED: 0, NOT_ANSWERED: 0, NOT_VISITED: 0, REVIEW: 0 };
  questions.forEach((q) => {
    const st = paletteState[q.id] || 'NOT_VISITED';
    if (st === 'ANSWERED') counts.ANSWERED++;
    else if (st === 'VISITED') counts.NOT_ANSWERED++;
    else if (st === 'NOT_VISITED') counts.NOT_VISITED++;
    else counts.REVIEW++;
  });

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white border-l border-slate-200 flex flex-col h-full">
      {/* Summary Stats */}
      <div className="p-3 border-b border-slate-200 bg-white">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Progress</p>
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          <div className="flex items-center justify-between px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Answered
            </span>
            <span className="font-bold text-emerald-700">{counts.ANSWERED}</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded-md bg-rose-50 border border-rose-200">
            <span className="flex items-center gap-1.5 text-rose-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Skipped
            </span>
            <span className="font-bold text-rose-700">{counts.NOT_ANSWERED}</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded-md bg-slate-50 border border-slate-200">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <span className="w-2 h-2 rounded-full border border-slate-400"></span>
              New
            </span>
            <span className="font-bold text-slate-600">{counts.NOT_VISITED}</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded-md bg-violet-50 border border-violet-200">
            <span className="flex items-center gap-1.5 text-violet-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              Review
            </span>
            <span className="font-bold text-violet-700">{counts.REVIEW}</span>
          </div>
        </div>
      </div>

      {/* Question Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Questions</p>
        <div className="grid grid-cols-5 gap-1.5">
          {questions.map((q, idx) => {
            const status = paletteState[q.id] || 'NOT_VISITED';
            const isActive = idx === currentQuestionIndex;
            return (
              <button
                key={q.id}
                onClick={() => dispatch(setCurrentQuestion({ questionIndex: idx, questionId: q.id }))}
                className={`relative aspect-square rounded-lg text-xs font-bold border cursor-pointer
                  ${STATUS_STYLES[status]}
                  ${isActive ? 'ring-2 ring-amber-400 ring-offset-2 scale-105' : 'hover:scale-105'}
                  transition-all`}
              >
                {idx + 1}
                {status === 'ANSWERED_AND_MARKED' && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
