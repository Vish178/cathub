export default function PassagePanel({ content }) {
  if (!content || !content.textPayload) return null;

  return (
    <div className="h-full overflow-y-auto p-4 bg-white border-r border-gray-300">
      <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
        Reading Passage / Data Set
      </div>
      <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
        {content.textPayload}
      </div>
    </div>
  );
}
