import { useDispatch, useSelector } from 'react-redux';
import { startExam, resumeExam } from '../store/examSessionSlice';
import { goHome } from '../store/navigationSlice';

const SECTION_DATA = {
  VARC: { name: 'Verbal Ability & Reading Comprehension', short: 'VARC', questions: 24, time: 40, marks: 72, icon: '📖', color: 'cyan' },
  DILR: { name: 'Data Interpretation & Logical Reasoning', short: 'DILR', questions: 22, time: 40, marks: 66, icon: '📊', color: 'emerald' },
  QA: { name: 'Quantitative Aptitude', short: 'QA', questions: 22, time: 40, marks: 66, icon: '🧮', color: 'fuchsia' },
};

export default function StartScreen() {
  const dispatch = useDispatch();
  const examStatus = useSelector((s) => s.examSession.examStatus);
  const examType = useSelector((s) => s.examSession.examType);
  const activeSections = useSelector((s) => s.examSession.activeSections) || ['VARC', 'DILR', 'QA'];
  const mockId = useSelector((s) => s.examSession.mockId);
  const canResume = examStatus === 'IN_PROGRESS';

  const sections = activeSections.map(s => SECTION_DATA[s]);
  const totalQ = sections.reduce((a, s) => a + s.questions, 0);
  const totalTime = sections.reduce((a, s) => a + s.time, 0);
  const totalMarks = sections.reduce((a, s) => a + s.marks, 0);
  const isSectional = examType === 'sectional';
  const mockNumber = mockId?.match(/\d+/)?.[0] || '1';

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="max-w-3xl w-full relative">
        <button
          onClick={() => dispatch(goHome())}
          className="mb-4 text-xs text-slate-400 hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Dashboard
        </button>

        <div className="bg-[#131320] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Hero */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-black tracking-widest uppercase mb-4">
                {isSectional ? 'Sectional Test' : `Mock Test ${mockNumber}`}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                {isSectional ? (
                  <>{activeSections[0]}<br/><span className="text-gradient-blue">Sectional</span></>
                ) : (
                  <>CAT Full<br/><span className="text-gradient">Simulation</span></>
                )}
              </h1>
              <p className="text-slate-300 mt-4 text-base max-w-md">
                {isSectional
                  ? `40-minute ${SECTION_DATA[activeSections[0]].name} focused drill.`
                  : 'Complete 120-minute 3-section CAT experience. Real timing. Real scoring.'}
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-white">{totalQ}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Questions</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-white">{totalTime}<span className="text-base text-slate-500">m</span></div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Duration</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-white">{totalMarks}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Max Marks</div>
              </div>
            </div>

            {/* Section Breakdown */}
            <div className="space-y-2 mb-6">
              {sections.map((s) => (
                <div key={s.name} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-white">{s.short}</div>
                    <div className="text-xs text-slate-500 truncate">{s.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-white">{s.questions} Qs · {s.time}m</div>
                    <div className="text-xs text-slate-500">{s.marks} marks</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Marking */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-center">
                <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Correct</div>
                <div className="text-xl font-black text-emerald-400 mt-1">+3</div>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 text-center">
                <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest">Wrong MCQ</div>
                <div className="text-xl font-black text-rose-400 mt-1">−1</div>
              </div>
              <div className="bg-slate-500/10 border border-slate-500/30 rounded-xl p-3 text-center">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Wrong TITA</div>
                <div className="text-xl font-black text-slate-400 mt-1">0</div>
              </div>
            </div>

            {!isSectional && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6 flex gap-3">
                <span className="text-lg flex-shrink-0">⚠️</span>
                <p className="text-xs text-amber-200 leading-relaxed">
                  Sections must be attempted in order. Once a section timer expires or you submit, you <strong className="text-amber-100">cannot return</strong> to it.
                </p>
              </div>
            )}

            <button
              onClick={() => canResume ? dispatch(resumeExam()) : dispatch(startExam())}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-5 rounded-2xl font-black text-lg hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer shadow-lg shadow-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/70 animate-pulse-glow"
            >
              {canResume ? '▶ Resume Test' : '🚀 Start Test'}
            </button>
            {canResume && (
              <p className="text-xs text-center text-amber-400 mt-3 font-medium">
                You have an in-progress session
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
