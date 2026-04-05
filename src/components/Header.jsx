import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { forceSectionTransition } from '../store/examSessionSlice';
import Timer from './Timer';

const SECTION_FULL = {
  VARC: 'Verbal Ability & Reading Comprehension',
  DILR: 'Data Interpretation & Logical Reasoning',
  QA: 'Quantitative Aptitude',
};

const SECTION_ICONS = { VARC: '📖', DILR: '📊', QA: '🧮' };

export default function Header() {
  const dispatch = useDispatch();
  const currentSectionIndex = useSelector((s) => s.examSession.currentSectionIndex);
  const currentSection = useSelector((s) => s.examSession.currentSectionId);
  const activeSections = useSelector((s) => s.examSession.activeSections) || ['VARC', 'DILR', 'QA'];
  const isSectional = activeSections.length === 1;
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white shadow-lg select-none">
        {/* Top row */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xl">{SECTION_ICONS[currentSection]}</span>
            <h1 className="text-sm font-bold tracking-wide">
              {isSectional ? `${currentSection} Sectional Test` : 'CAT Mock Test'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-blue-200 font-medium">Time Remaining</span>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <Timer />
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        {!isSectional && (
          <div className="flex items-stretch bg-black/20 px-3">
            {activeSections.map((sec, idx) => {
              const isActive = idx === currentSectionIndex;
              const isCompleted = idx < currentSectionIndex;
              const isLocked = idx > currentSectionIndex;

              return (
                <div
                  key={sec}
                  className={`relative px-5 py-2.5 text-xs font-semibold transition-all
                    ${isActive
                      ? 'bg-white text-indigo-900 rounded-t-lg -mb-px border-x border-t border-white/30'
                      : isCompleted
                        ? 'text-green-300'
                        : 'text-slate-400'
                    }
                  `}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{SECTION_ICONS[sec]}</span>
                    <span>{sec}</span>
                    {isCompleted && <span className="text-green-500 ml-1">✓</span>}
                    {isLocked && <span className="ml-1 opacity-50">🔒</span>}
                  </div>
                  {isActive && (
                    <span className="block text-[9px] font-normal text-indigo-900/60 mt-0.5">
                      {SECTION_FULL[sec]}
                    </span>
                  )}
                </div>
              );
            })}

            {currentSectionIndex < activeSections.length - 1 && (
              <button
                onClick={() => setShowConfirm(true)}
                className="ml-auto my-1.5 px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-lg hover:from-amber-300 hover:to-orange-400 cursor-pointer shadow-md transition-all hover:shadow-lg"
              >
                Submit Section & Continue →
              </button>
            )}
          </div>
        )}
      </header>

      {/* Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">⚠️</div>
              <h3 className="text-lg font-bold text-slate-900">Submit Section?</h3>
            </div>
            <p className="text-sm text-slate-600 mb-1">
              You're about to submit <strong className="text-slate-900">{SECTION_FULL[currentSection]}</strong>.
            </p>
            <p className="text-sm text-red-600 font-semibold mb-5">
              You will NOT be able to return to this section.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowConfirm(false); dispatch(forceSectionTransition()); }}
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer font-semibold"
              >
                Yes, Continue →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
