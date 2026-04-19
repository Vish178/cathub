import ChartRenderer from './ChartRenderer';
import DiagramRenderer from './DiagramRenderer';

export default function PassagePanel({ content }) {
  if (!content) return null;
  const hasText = !!content.textPayload;
  const hasChart = !!content.chart;
  const hasDiagram = !!content.diagram;
  if (!hasText && !hasChart && !hasDiagram) return null;

  return (
    <div className="h-full overflow-y-auto p-4 bg-white border-r border-slate-200 space-y-4">
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        Reading Passage / Data Set
      </div>

      {hasText && (
        <div className="text-sm leading-relaxed text-slate-800 whitespace-pre-line">
          {content.textPayload}
        </div>
      )}

      {hasChart && <ChartRenderer chart={content.chart} />}
      {hasDiagram && <DiagramRenderer diagram={content.diagram} />}
    </div>
  );
}
