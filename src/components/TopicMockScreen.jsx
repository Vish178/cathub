import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goHome, navigateTo, setQuantCategory } from '../store/navigationSlice';
import { getTopicById } from '../data/quantTopics';
import { getQuestionsForTopic } from '../data/topicPool';
import ChartRenderer from './ChartRenderer';
import DiagramRenderer from './DiagramRenderer';

const COLOR_MAP = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500', light: 'bg-blue-500/10' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500', light: 'bg-purple-500/10' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500', light: 'bg-emerald-500/10' },
  amber: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500', light: 'bg-amber-500/10' },
  rose: { bg: 'bg-rose-600', text: 'text-rose-400', border: 'border-rose-500', light: 'bg-rose-500/10' },
};

export default function TopicMockScreen() {
  const dispatch = useDispatch();
  const topicId = useSelector((s) => s.navigation.topicId);
  const topic = topicId ? getTopicById(topicId) : null;
  const questions = useMemo(() => (topicId ? getQuestionsForTopic(topicId, 15) : []), [topicId]);
  const c = topic ? COLOR_MAP[topic.categoryColor] : COLOR_MAP.blue;

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState('');
  const [titaInput, setTitaInput] = useState('');
  const [attempted, setAttempted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [results, setResults] = useState({}); // { qid: 'correct'|'wrong'|'skipped' }

  if (!topic) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">No topic selected.</p>
          <button onClick={() => dispatch(goHome())} className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">Back to Dashboard</button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <nav className="sticky top-0 bg-slate-950 border-b border-slate-800 px-6 h-16 flex items-center gap-4">
          <button onClick={() => dispatch(goHome())} className="text-sm text-slate-400 hover:text-white cursor-pointer">← Dashboard</button>
          <span className="font-bold">{topic.title}</span>
        </nav>
        <div className="max-w-xl mx-auto p-10 text-center">
          <div className={`w-20 h-20 mx-auto rounded-2xl ${c.light} flex items-center justify-center text-3xl mb-4`}>{topic.icon}</div>
          <h1 className="text-2xl font-bold mb-2">No questions yet for {topic.title}</h1>
          <p className="text-slate-400 text-sm mb-6">
            We're still expanding the topic-wise question bank. In the meantime, try the main mock tests.
          </p>
          <button onClick={() => dispatch(goHome())} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold cursor-pointer hover:bg-indigo-500">
            Explore Mocks →
          </button>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  const isMCQ = q.format === 'MCQ';
  const optionLabels = ['A', 'B', 'C', 'D', 'E'];
  const userAnswer = isMCQ ? selected : titaInput.trim();
  const isCorrect = userAnswer && userAnswer.toLowerCase() === q.correctAnswer.trim().toLowerCase();

  const goToQuestion = (i) => {
    setIdx(i);
    setSelected('');
    setTitaInput('');
    setAttempted(false);
    setShowSolution(false);
  };

  const handleCheck = () => {
    if (!userAnswer) return;
    setAttempted(true);
    setShowSolution(true);
    setResults({ ...results, [q.id]: isCorrect ? 'correct' : 'wrong' });
  };

  const handleReveal = () => {
    setShowSolution(true);
    setAttempted(true);
    if (!results[q.id]) setResults({ ...results, [q.id]: 'skipped' });
  };

  const correctCount = Object.values(results).filter((v) => v === 'correct').length;
  const wrongCount = Object.values(results).filter((v) => v === 'wrong').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Nav */}
      <nav className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => { dispatch(setQuantCategory(topic.category)); dispatch(navigateTo('quant')); }} className="text-sm text-slate-400 hover:text-white cursor-pointer">
              ← Topics
            </button>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2 min-w-0">
              <span className={`w-6 h-6 rounded-md ${c.bg} flex items-center justify-center text-xs font-black`}>{topic.icon}</span>
              <span className="font-bold text-sm truncate">{topic.title}</span>
              <span className="text-xs text-slate-500 hidden md:inline">· {topic.categoryTitle}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-bold">✓ {correctCount}</span>
            <span className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 font-bold">✗ {wrongCount}</span>
            <span className="text-slate-400">{idx + 1}/{questions.length}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6">
          {/* Main Question Area */}
          <div className="space-y-5">
            {/* Passage/Chart/Diagram */}
            {q.parentContent && (q.parentContent.textPayload || q.parentContent.chart || q.parentContent.diagram) && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Context</div>
                {q.parentContent.textPayload && (
                  <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{q.parentContent.textPayload}</div>
                )}
                {q.parentContent.chart && <ChartRenderer chart={q.parentContent.chart} />}
                {q.parentContent.diagram && <DiagramRenderer diagram={q.parentContent.diagram} />}
              </div>
            )}

            {/* Question Card */}
            <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-6`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-500">
                  Q{idx + 1} · {isMCQ ? 'MCQ' : 'TITA'} · Difficulty {'★'.repeat(Math.round(q.difficultyRating || 3))}
                </span>
                {q.mockSource && <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">{q.mockSource}</span>}
              </div>

              <div className="text-base text-slate-100 whitespace-pre-line leading-relaxed mb-5">{q.questionText}</div>

              {/* MCQ */}
              {isMCQ && q.options && (
                <div className="space-y-2">
                  {q.options.map((opt, i) => {
                    const label = optionLabels[i];
                    const isSelected = selected === label;
                    const isCorrectOpt = label === q.correctAnswer;
                    let style = 'border-slate-700 hover:bg-slate-800';
                    if (attempted && showSolution) {
                      if (isCorrectOpt) style = 'border-emerald-500 bg-emerald-500/10';
                      else if (isSelected && !isCorrect) style = 'border-rose-500 bg-rose-500/10';
                    } else if (isSelected) style = `${c.border} ${c.light}`;
                    return (
                      <label key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${style}`}>
                        <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                          isSelected ? `${c.border} ${c.bg} text-white` : 'border-slate-600 text-slate-400'
                        }`}>
                          {label}
                        </div>
                        <input type="radio" name="opt" value={label} checked={isSelected} onChange={() => !attempted && setSelected(label)} disabled={attempted} className="sr-only"/>
                        <span className="text-sm text-slate-200 flex-1">{opt}</span>
                        {attempted && showSolution && isCorrectOpt && <span className="text-xs font-bold text-emerald-400">Correct</span>}
                        {attempted && showSolution && isSelected && !isCorrect && <span className="text-xs font-bold text-rose-400">Wrong</span>}
                      </label>
                    );
                  })}
                </div>
              )}

              {/* TITA */}
              {!isMCQ && (
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Your Answer</label>
                  <input
                    type="text"
                    value={titaInput}
                    onChange={(e) => !attempted && setTitaInput(e.target.value)}
                    disabled={attempted}
                    placeholder="Type your answer"
                    className="w-full max-w-xs bg-slate-800 border-2 border-slate-700 rounded-xl px-4 py-3 text-sm font-medium focus:border-indigo-500 focus:outline-none"
                  />
                  {attempted && showSolution && (
                    <p className="mt-3 text-sm">
                      Correct answer: <span className="font-bold text-emerald-400">{q.correctAnswer}</span>
                      {isCorrect ? <span className="ml-2 text-emerald-400 font-bold">✓ Match</span> : <span className="ml-2 text-rose-400 font-bold">✗ Your: {titaInput}</span>}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                {!attempted && isMCQ && (
                  <button
                    onClick={handleCheck}
                    disabled={!selected}
                    className={`px-5 py-2.5 ${c.bg} text-white rounded-xl text-sm font-bold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer`}
                  >
                    Check Answer
                  </button>
                )}
                {!attempted && !isMCQ && titaInput && (
                  <button
                    onClick={handleCheck}
                    className={`px-5 py-2.5 ${c.bg} text-white rounded-xl text-sm font-bold cursor-pointer`}
                  >
                    Check Answer
                  </button>
                )}
                <button onClick={handleReveal} className="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-700 cursor-pointer">
                  {showSolution ? 'Solution Shown' : 'Reveal Solution'}
                </button>
              </div>

              {/* Result Banner */}
              {attempted && showSolution && (
                <div className={`mt-5 p-4 rounded-xl text-sm font-bold ${
                  isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                }`}>
                  {isCorrect ? '✓ Correct! +3 marks' : `✗ Incorrect. ${isMCQ ? 'Correct: ' + q.correctAnswer : ''} ${isMCQ ? '(-1 mark)' : '(0 marks)'}`}
                </div>
              )}
            </div>

            {/* Solution */}
            {showSolution && q.solution && (
              <div className="bg-amber-500/5 border border-amber-500/30 rounded-2xl p-5">
                <h4 className="font-bold text-amber-400 text-sm mb-3 uppercase tracking-wider">Solution</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{q.solution.detailedExplanation}</p>
                {q.solution.shortcutMethod && (
                  <div className="mt-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">Shortcut</p>
                    <p className="text-sm text-slate-300">{q.solution.shortcutMethod}</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => goToQuestion(idx - 1)}
                disabled={idx === 0}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                ← Prev
              </button>
              <span className="text-xs text-slate-500">Question {idx + 1} of {questions.length}</span>
              <button
                onClick={() => goToQuestion(idx + 1)}
                disabled={idx === questions.length - 1}
                className={`px-4 py-2 ${c.bg} text-white rounded-lg text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer`}
              >
                Next →
              </button>
            </div>
          </div>

          {/* Sidebar: Question Navigator */}
          <aside className="hidden md:block">
            <div className="sticky top-20 bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Questions</p>
              <div className="grid grid-cols-4 gap-1.5">
                {questions.map((_, i) => {
                  const r = results[questions[i].id];
                  let style = 'bg-slate-800 text-slate-400';
                  if (i === idx) style = `${c.bg} text-white ring-2 ring-amber-400`;
                  else if (r === 'correct') style = 'bg-emerald-600 text-white';
                  else if (r === 'wrong') style = 'bg-rose-600 text-white';
                  else if (r === 'skipped') style = 'bg-slate-700 text-slate-300';
                  return (
                    <button
                      key={i}
                      onClick={() => goToQuestion(i)}
                      className={`aspect-square rounded-lg text-xs font-bold cursor-pointer transition-all ${style}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-[10px]">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded bg-emerald-500"></span><span className="text-slate-400">Correct</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded bg-rose-500"></span><span className="text-slate-400">Wrong</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded bg-slate-700"></span><span className="text-slate-400">Skipped</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
