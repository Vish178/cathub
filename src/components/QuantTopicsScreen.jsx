import { useDispatch, useSelector } from 'react-redux';
import { goHome, navigateTo, setQuantCategory, setTopicId } from '../store/navigationSlice';
import { QUANT_CATEGORIES } from '../data/quantTopics';
import { getTopicStats } from '../data/topicPool';

const COLOR_MAP = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500', light: 'bg-blue-500/10' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500', light: 'bg-purple-500/10' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500', light: 'bg-emerald-500/10' },
  amber: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500', light: 'bg-amber-500/10' },
  rose: { bg: 'bg-rose-600', text: 'text-rose-400', border: 'border-rose-500', light: 'bg-rose-500/10' },
};

export default function QuantTopicsScreen() {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector((s) => s.navigation.quantCategory);
  const activeCategory = activeCategoryId ? QUANT_CATEGORIES[activeCategoryId] : null;
  const stats = getTopicStats();

  const startTopic = (topicId) => {
    dispatch(setTopicId(topicId));
    dispatch(navigateTo('topic-mock'));
  };

  if (!activeCategory) {
    // Show all 5 categories
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <button onClick={() => dispatch(goHome())} className="text-sm text-slate-400 hover:text-white cursor-pointer flex items-center gap-1.5">
              ← Dashboard
            </button>
            <span className="font-bold text-sm">Quant · Topic Practice</span>
            <div></div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Pick a category.</h1>
          <p className="text-slate-400 mb-10">Drill specific topics. Each topic has its own mini-mock with focused questions.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.values(QUANT_CATEGORIES).map((cat) => {
              const c = COLOR_MAP[cat.color];
              return (
                <button
                  key={cat.id}
                  onClick={() => dispatch(setQuantCategory(cat.id))}
                  className={`text-left p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:${c.border} hover:bg-slate-800 transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-xl font-black`}>{cat.icon}</div>
                    <div>
                      <div className={`font-black text-lg ${c.text}`}>{cat.title}</div>
                      <div className="text-xs text-slate-500">{cat.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{cat.description}</p>
                  <div className={`mt-4 text-xs font-bold ${c.text}`}>
                    {Object.keys(cat.topics).length} topics →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Show topics within the active category
  const c = COLOR_MAP[activeCategory.color];
  const topics = Object.values(activeCategory.topics);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => dispatch(goHome())} className="text-sm text-slate-400 hover:text-white cursor-pointer">
              ← Dashboard
            </button>
            <button onClick={() => dispatch(setQuantCategory(null))} className="text-sm text-slate-400 hover:text-white cursor-pointer">
              ← Categories
            </button>
          </div>
          <span className="font-bold text-sm">{activeCategory.title}</span>
          <div></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Category Hero */}
        <div className={`rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border ${c.border} p-8 mb-10`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center text-3xl font-black shadow-lg`}>
              {activeCategory.icon}
            </div>
            <div>
              <h1 className={`text-3xl md:text-4xl font-black ${c.text}`}>{activeCategory.title}</h1>
              <p className="text-slate-400 text-sm mt-1">{activeCategory.subtitle}</p>
            </div>
          </div>
          <p className="text-slate-300 text-base">{activeCategory.description}</p>
        </div>

        {/* Topics Grid */}
        <h2 className="text-xl font-bold mb-4">Choose a topic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => {
            const topicStats = stats[topic.id] || { count: 0 };
            return (
              <button
                key={topic.id}
                onClick={() => startTopic(topic.id)}
                className={`text-left p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:${c.border} hover:bg-slate-800 transition-all cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${c.light} flex items-center justify-center text-lg font-black ${c.text}`}>
                    {topic.icon}
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${c.light} ${c.text} font-bold`}>
                    {topicStats.count} Qs
                  </span>
                </div>
                <h3 className={`font-bold text-base ${c.text} mb-1`}>{topic.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{topic.description}</p>
                <div className={`mt-4 inline-flex items-center gap-1 text-xs font-bold ${c.text} group-hover:gap-2 transition-all`}>
                  Practice →
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
