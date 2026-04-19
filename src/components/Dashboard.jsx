import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo, setExamConfig, setQuantCategory } from '../store/navigationSlice';
import { configureExam } from '../store/examSessionSlice';
import { getAllMockTests, getMocksByEra, getPoolStats } from '../data/index';
import { QUANT_CATEGORIES } from '../data/quantTopics';
import { getTopicStats } from '../data/topicPool';

const SECTIONS_META = {
  VARC: { name: 'VARC', full: 'Verbal Ability & Reading Comprehension', icon: '📖', color: 'cyan' },
  DILR: { name: 'DILR', full: 'Data Interpretation & Logical Reasoning', icon: '📊', color: 'emerald' },
  QA: { name: 'QA', full: 'Quantitative Aptitude', icon: '🧮', color: 'fuchsia' },
};

const DIFFICULTY_META = {
  balanced: { bg: 'bg-blue-600', hover: 'hover:bg-blue-500', label: 'Balanced', emoji: '⚖️' },
  easy: { bg: 'bg-emerald-600', hover: 'hover:bg-emerald-500', label: 'Easy', emoji: '🌱' },
  medium: { bg: 'bg-amber-600', hover: 'hover:bg-amber-500', label: 'Medium', emoji: '🔥' },
  hard: { bg: 'bg-rose-600', hover: 'hover:bg-rose-500', label: 'Hard', emoji: '⚡' },
  expert: { bg: 'bg-purple-600', hover: 'hover:bg-purple-500', label: 'Expert', emoji: '👑' },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const mockTests = getAllMockTests();
  const mocksByEra = getMocksByEra();
  const poolStats = getPoolStats();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const startFullMock = (mockId) => {
    dispatch(configureExam({ examType: 'full', sections: ['VARC', 'DILR', 'QA'], mockId }));
    dispatch(setExamConfig({ type: 'full', mockId }));
    dispatch(navigateTo('exam-start'));
  };

  const startSectional = (section) => {
    dispatch(configureExam({ examType: 'sectional', sections: [section], mockId: 'mock-1' }));
    dispatch(setExamConfig({ type: 'sectional', section, mockId: 'mock-1' }));
    dispatch(navigateTo('exam-start'));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ══════ NAVIGATION ══════ */}
      <nav className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800' : 'bg-slate-950 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">
              C
            </div>
            <span className="font-black text-lg tracking-tight">
              CAT<span className="text-indigo-400">Hub</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#mocks" className="hover:text-white transition-colors">Mocks</a>
            <a href="#sections" className="hover:text-white transition-colors">Sections</a>
            <a href="#quant" className="hover:text-white transition-colors">Quant</a>
            <a href="#pool" className="hover:text-white transition-colors">Pool</a>
          </div>
          <button
            onClick={() => startFullMock('mock-1')}
            className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Start Free →
          </button>
        </div>
      </nav>

      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-slate-950 to-slate-950"></div>
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        ></div>
        {/* Orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-slate-300">100% Free · No Signup · No Ads</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              Crack CAT
              <br/>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Like a Pro.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              {mockTests.length} full-length mock tests, sectional practice, and a smart question solver —{' '}
              <span className="text-white font-semibold">all in one place.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-16">
              <button
                onClick={() => startFullMock('mock-1')}
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm hover:from-indigo-400 hover:to-purple-500 transition-all cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50"
              >
                Start Mock Test 1 →
              </button>
              <a
                href="#mocks"
                className="px-6 py-3.5 bg-slate-800 border border-slate-700 text-white rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Browse All {mockTests.length} Mocks
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: mockTests.length, label: 'Mock Tests', sub: 'Full-length' },
                { num: poolStats.total, label: 'Questions', sub: 'In the pool' },
                { num: 3, label: 'Sections', sub: 'VARC · DILR · QA' },
                { num: '120', suffix: 'm', label: 'Per Mock', sub: 'Real CAT timing' },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-4xl font-black tracking-tight text-white">
                    {stat.num}<span className="text-xl text-slate-500 font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ QUICK ACTIONS ══════ */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">What you can do</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Four ways to prep.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="#mocks" className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-slate-800 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-2xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-white">50 Mock Tests</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Full-length simulations across 5 difficulty tiers</p>
              <div className="mt-4 text-xs text-indigo-400 font-bold group-hover:translate-x-1 transition-transform">Explore →</div>
            </a>

            <a href="#sections" className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:bg-slate-800 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center text-2xl mb-4">🎓</div>
              <h3 className="font-bold text-lg text-white">Sectional Tests</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Focus on VARC, DILR, or QA — 40 min each</p>
              <div className="mt-4 text-xs text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">Practice →</div>
            </a>

            <button
              onClick={() => { dispatch(setExamConfig({ type: 'practice', section: 'VARC' })); dispatch(navigateTo('practice')); }}
              className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-slate-800 transition-all text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-2xl mb-4">📚</div>
              <h3 className="font-bold text-lg text-white">Practice Series</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Flashcards with click-to-reveal solutions</p>
              <div className="mt-4 text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">Learn →</div>
            </button>

            <button
              onClick={() => dispatch(navigateTo('solver'))}
              className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500 hover:bg-slate-800 transition-all text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-2xl mb-4">💡</div>
              <h3 className="font-bold text-lg text-white">Question Solver</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Paste any question, get step-by-step answers</p>
              <div className="mt-4 text-xs text-amber-400 font-bold group-hover:translate-x-1 transition-transform">Solve →</div>
            </button>
          </div>
        </div>
      </section>

      {/* ══════ SECTIONAL TESTS ══════ */}
      <section id="sections" className="py-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-2">Sectional Mastery</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Pick your section.</h2>
            <p className="text-base text-slate-400 mt-3">Targeted 40-minute drills for each CAT section.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.values(SECTIONS_META).map((sec) => {
              const colorClasses = {
                cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', hover: 'hover:border-cyan-500' },
                emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', hover: 'hover:border-emerald-500' },
                fuchsia: { bg: 'bg-fuchsia-600', text: 'text-fuchsia-400', hover: 'hover:border-fuchsia-500' },
              }[sec.color];
              return (
                <button
                  key={sec.name}
                  onClick={() => startSectional(sec.name)}
                  className={`group text-left p-8 rounded-2xl bg-slate-900 border border-slate-800 ${colorClasses.hover} hover:bg-slate-800 transition-all cursor-pointer`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses.bg} flex items-center justify-center text-3xl mb-5 shadow-lg`}>
                    {sec.icon}
                  </div>
                  <h3 className={`text-3xl font-black ${colorClasses.text} mb-1`}>{sec.name}</h3>
                  <p className="text-sm text-slate-400 font-medium">{sec.full}</p>

                  <div className="flex items-center gap-2 mt-6 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                      {sec.name === 'VARC' ? 24 : 22} Questions
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                      40 min
                    </span>
                  </div>

                  <div className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${colorClasses.text} group-hover:gap-2.5 transition-all`}>
                    Start {sec.name} Test →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ QUANT TOPICS ══════ */}
      <section id="quant" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-2">Topic Mastery</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Quant — Topic Practice.</h2>
            <p className="text-base text-slate-400 mt-3">
              Drill specific topics. Pick a category, choose a topic, get focused practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.values(QUANT_CATEGORIES).map((cat) => {
              const colorClasses = {
                blue: { bg: 'bg-blue-600', text: 'text-blue-400', hover: 'hover:border-blue-500', light: 'bg-blue-500/10' },
                purple: { bg: 'bg-purple-600', text: 'text-purple-400', hover: 'hover:border-purple-500', light: 'bg-purple-500/10' },
                emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', hover: 'hover:border-emerald-500', light: 'bg-emerald-500/10' },
                amber: { bg: 'bg-amber-600', text: 'text-amber-400', hover: 'hover:border-amber-500', light: 'bg-amber-500/10' },
                rose: { bg: 'bg-rose-600', text: 'text-rose-400', hover: 'hover:border-rose-500', light: 'bg-rose-500/10' },
              }[cat.color];
              const topicList = Object.values(cat.topics);
              return (
                <button
                  key={cat.id}
                  onClick={() => { dispatch(setQuantCategory(cat.id)); dispatch(navigateTo('quant')); }}
                  className={`group text-left p-6 rounded-2xl bg-slate-900 border border-slate-800 ${colorClasses.hover} hover:bg-slate-800 transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center text-xl font-black shadow-lg`}>
                      {cat.icon}
                    </div>
                    <div>
                      <div className={`font-black text-lg ${colorClasses.text}`}>{cat.title}</div>
                      <div className="text-xs text-slate-500">{cat.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {topicList.slice(0, 5).map((t) => (
                      <span key={t.id} className={`text-[10px] px-2 py-1 rounded-md ${colorClasses.light} ${colorClasses.text} font-semibold border border-slate-800`}>
                        {t.title}
                      </span>
                    ))}
                    {topicList.length > 5 && (
                      <span className="text-[10px] px-2 py-1 rounded-md bg-slate-800 text-slate-400 font-semibold">
                        +{topicList.length - 5} more
                      </span>
                    )}
                  </div>
                  <div className={`mt-4 inline-flex items-center gap-1 text-xs font-bold ${colorClasses.text} group-hover:gap-2 transition-all`}>
                    {topicList.length} topics →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ 50 MOCKS ══════ */}
      <section id="mocks" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em] mb-2">The Grind</div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                {mockTests.length} Full-Length Mocks.
              </h2>
              <p className="text-base text-slate-400 mt-3">
                Sampled from a pool of <span className="text-white font-bold">{poolStats.total} questions</span>. Each mock is unique.
              </p>
            </div>
            {poolStats.banks < 9 && (
              <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-900/30 border border-amber-700/40 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                {9 - poolStats.banks} more banks loading
              </div>
            )}
          </div>

          <div className="space-y-8">
            {Object.entries(mocksByEra).map(([era, mocks]) => {
              const diff = mocks[0]?.difficulty || 'balanced';
              const style = DIFFICULTY_META[diff];
              return (
                <div key={era}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{style.emoji}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{style.label} Tier</h3>
                      <p className="text-xs text-slate-500">{era} · {mocks.length} mocks</p>
                    </div>
                    <div className="flex-1 h-px bg-slate-800"></div>
                  </div>

                  <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5">
                    {mocks.map((mock) => (
                      <button
                        key={mock.id}
                        onClick={() => startFullMock(mock.id)}
                        title={`${mock.title} — ${mock.description}`}
                        className={`group aspect-square rounded-xl ${style.bg} ${style.hover} text-white font-black transition-all cursor-pointer flex flex-col items-center justify-center hover:scale-110 hover:shadow-xl`}
                      >
                        <span className="text-[9px] font-bold opacity-70 uppercase tracking-widest">Mock</span>
                        <span className="text-2xl font-black mt-0.5">{mock.mockNumber}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ POOL STATS ══════ */}
      <section id="pool" className="py-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-bold text-fuchsia-400 uppercase tracking-[0.2em] mb-2">Inside the Pool</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Question Distribution.</h2>
            <p className="text-base text-slate-400 mt-3">
              {poolStats.banks} banks active · {poolStats.total} questions total
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.entries(SECTIONS_META).map(([key, sec]) => {
              const count = poolStats[key] || 0;
              const pct = poolStats.total > 0 ? (count / poolStats.total) * 100 : 33.33;
              const colorMap = { cyan: 'bg-cyan-500', emerald: 'bg-emerald-500', fuchsia: 'bg-fuchsia-500' };
              const textMap = { cyan: 'text-cyan-400', emerald: 'text-emerald-400', fuchsia: 'text-fuchsia-400' };
              return (
                <div key={key} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{sec.icon}</span>
                    <div>
                      <div className={`font-black text-lg ${textMap[sec.color]}`}>{sec.name}</div>
                      <div className="text-xs text-slate-500">{sec.full}</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-black text-white">{count}</span>
                    <span className="text-sm text-slate-500">questions</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colorMap[sec.color]} transition-all duration-1000`}
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ FOOTER CTA ══════ */}
      <section className="py-24 border-t border-slate-800 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Ready to <span className="bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">dominate?</span>
          </h2>
          <p className="text-base text-slate-400 mb-8">
            No signup. No paywalls. Just you and the CAT, on your schedule.
          </p>
          <button
            onClick={() => startFullMock('mock-1')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-black text-base hover:from-indigo-400 hover:to-purple-500 transition-all cursor-pointer shadow-xl shadow-indigo-500/40"
          >
            Launch Mock 1 Now →
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs">C</div>
            <span>CAT<span className="text-indigo-400">Hub</span> © 2025 · Free & Open Source</span>
          </div>
          <div>React · Redux · Tailwind · MIT</div>
        </div>
      </footer>
    </div>
  );
}
