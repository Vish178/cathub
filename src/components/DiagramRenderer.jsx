// Diagram Renderer for LR questions
// Supports: Venn diagrams (2-set, 3-set), seating arrangements (circular/linear/square),
//           family tree, tournament bracket, matrix/grid, network/route map

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

// ── Venn Diagram (2-set or 3-set) ──
export function VennDiagram({ sets, regions, title, size = 320 }) {
  const W = size, H = size - 40;
  const is3Set = sets.length === 3;

  if (!is3Set) {
    // 2-set Venn
    const r = 80, cx1 = W/2 - 40, cx2 = W/2 + 40, cy = H/2;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md h-auto bg-white rounded-lg border border-slate-200">
        {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
        <circle cx={cx1} cy={cy} r={r} fill={COLORS[0]} fillOpacity="0.25" stroke={COLORS[0]} strokeWidth="2"/>
        <circle cx={cx2} cy={cy} r={r} fill={COLORS[1]} fillOpacity="0.25" stroke={COLORS[1]} strokeWidth="2"/>
        <text x={cx1-40} y={cy-r-6} textAnchor="middle" className="text-xs font-bold" fill={COLORS[0]}>{sets[0]}</text>
        <text x={cx2+40} y={cy-r-6} textAnchor="middle" className="text-xs font-bold" fill={COLORS[1]}>{sets[1]}</text>
        {regions && (
          <>
            <text x={cx1-35} y={cy+5} textAnchor="middle" className="text-sm font-bold fill-slate-800">{regions.A ?? '?'}</text>
            <text x={cx2+35} y={cy+5} textAnchor="middle" className="text-sm font-bold fill-slate-800">{regions.B ?? '?'}</text>
            <text x={W/2} y={cy+5} textAnchor="middle" className="text-sm font-bold fill-slate-800">{regions.AB ?? '?'}</text>
            {regions.none !== undefined && (
              <text x={W-30} y={H-10} textAnchor="middle" className="text-[10px] fill-slate-600">Outside: {regions.none}</text>
            )}
          </>
        )}
      </svg>
    );
  }

  // 3-set Venn
  const r = 75;
  const cx1 = W/2 - 45, cy1 = H/2 - 25;
  const cx2 = W/2 + 45, cy2 = H/2 - 25;
  const cx3 = W/2,      cy3 = H/2 + 40;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <circle cx={cx1} cy={cy1} r={r} fill={COLORS[0]} fillOpacity="0.22" stroke={COLORS[0]} strokeWidth="2"/>
      <circle cx={cx2} cy={cy1} r={r} fill={COLORS[1]} fillOpacity="0.22" stroke={COLORS[1]} strokeWidth="2"/>
      <circle cx={cx3} cy={cy3} r={r} fill={COLORS[2]} fillOpacity="0.22" stroke={COLORS[2]} strokeWidth="2"/>
      <text x={cx1-r+10} y={cy1-r} textAnchor="middle" className="text-xs font-bold" fill={COLORS[0]}>{sets[0]}</text>
      <text x={cx2+r-10} y={cy1-r} textAnchor="middle" className="text-xs font-bold" fill={COLORS[1]}>{sets[1]}</text>
      <text x={cx3} y={cy3+r+14} textAnchor="middle" className="text-xs font-bold" fill={COLORS[2]}>{sets[2]}</text>
      {regions && (
        <>
          <text x={cx1-30} y={cy1} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.A ?? '?'}</text>
          <text x={cx2+30} y={cy1} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.B ?? '?'}</text>
          <text x={cx3} y={cy3+30} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.C ?? '?'}</text>
          <text x={W/2} y={cy1} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.AB ?? '?'}</text>
          <text x={cx1+5} y={cy3} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.AC ?? '?'}</text>
          <text x={cx2-5} y={cy3} textAnchor="middle" className="text-[11px] font-bold fill-slate-800">{regions.BC ?? '?'}</text>
          <text x={W/2} y={cy3-5} textAnchor="middle" className="text-[11px] font-bold fill-slate-900">{regions.ABC ?? '?'}</text>
          {regions.none !== undefined && (
            <text x={W-45} y={H-10} textAnchor="middle" className="text-[10px] fill-slate-600">Outside: {regions.none}</text>
          )}
        </>
      )}
    </svg>
  );
}

// ── Seating Arrangement (Circular / Linear / Square) ──
export function SeatingArrangement({ shape = 'circular', seats, title, size = 300 }) {
  const W = size, H = size;
  const count = seats.length;

  if (shape === 'circular') {
    const cx = W/2, cy = H/2, r = W/2 - 40;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-sm h-auto bg-white rounded-lg border border-slate-200">
        {title && <text x={W/2} y={14} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth="1"/>
        {seats.map((s, i) => {
          const angle = -Math.PI/2 + (2*Math.PI*i)/count;
          const x = cx + r*Math.cos(angle), y = cy + r*Math.sin(angle);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="22" fill={s ? COLORS[i % COLORS.length] : '#e2e8f0'} fillOpacity={s ? 0.8 : 1} stroke="#475569" strokeWidth="1.5"/>
              <text x={x} y={y+4} textAnchor="middle" className="text-[10px] font-bold fill-white">{s || '?'}</text>
              <text x={cx + (r+32)*Math.cos(angle)} y={cy + (r+32)*Math.sin(angle) + 4} textAnchor="middle" className="text-[9px] fill-slate-500">{i+1}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (shape === 'linear') {
    const seatW = (W - 40) / count;
    return (
      <svg viewBox={`0 0 ${W} 110`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
        {title && <text x={W/2} y={16} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
        {seats.map((s, i) => {
          const x = 20 + i*seatW + seatW/2;
          return (
            <g key={i}>
              <rect x={x-seatW/2+4} y={40} width={seatW-8} height={50} rx="6" fill={s ? COLORS[i % COLORS.length] : '#e2e8f0'} fillOpacity={s ? 0.8 : 1} stroke="#475569" strokeWidth="1.5"/>
              <text x={x} y={70} textAnchor="middle" className="text-[11px] font-bold fill-white">{s || '?'}</text>
              <text x={x} y={104} textAnchor="middle" className="text-[9px] fill-slate-500">{i+1}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // Square (4 sides)
  const side = Math.ceil(count / 4);
  const cell = (W - 60) / Math.max(side, 2);
  const positions = [];
  for (let i = 0; i < side; i++) positions.push({ x: 30 + i*cell + cell/2, y: 30 }); // top
  for (let i = 0; i < side; i++) positions.push({ x: W-30 - cell/2, y: 30 + i*cell + cell/2 }); // right
  for (let i = 0; i < side; i++) positions.push({ x: W-30 - i*cell - cell/2, y: H-30 - cell/2 }); // bottom
  for (let i = 0; i < side; i++) positions.push({ x: 30 + cell/2, y: H-30 - i*cell - cell/2 }); // left
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-sm h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={14} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <rect x="30" y="30" width={W-60} height={H-60} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth="1"/>
      {seats.map((s, i) => {
        const p = positions[i];
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="20" fill={s ? COLORS[i % COLORS.length] : '#e2e8f0'} fillOpacity={s ? 0.8 : 1} stroke="#475569" strokeWidth="1.5"/>
            <text x={p.x} y={p.y+4} textAnchor="middle" className="text-[10px] font-bold fill-white">{s || '?'}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Family Tree / Blood Relation ──
// levels = [[{name, gender}, ...], ...] where each inner array is one generation
// connections = [{from: 'A', to: 'B', type: 'parent'|'spouse'|'sibling'}]
export function FamilyTree({ levels, connections = [], title }) {
  const W = 520, rowH = 80;
  const H = 50 + levels.length * rowH;
  const positions = {};
  levels.forEach((gen, rowIdx) => {
    const gap = (W - 40) / (gen.length + 1);
    gen.forEach((p, i) => {
      positions[p.name] = { x: 20 + gap * (i + 1), y: 40 + rowIdx * rowH };
    });
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      {connections.map((c, i) => {
        const a = positions[c.from], b = positions[c.to];
        if (!a || !b) return null;
        const stroke = c.type === 'spouse' ? '#ec4899' : '#475569';
        const dash = c.type === 'sibling' ? '4 4' : 'none';
        return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={stroke} strokeWidth="1.5" strokeDasharray={dash}/>;
      })}
      {levels.flatMap((gen, rowIdx) => gen.map((p) => {
        const pos = positions[p.name];
        const fill = p.gender === 'M' ? '#3b82f6' : p.gender === 'F' ? '#ec4899' : '#64748b';
        return (
          <g key={p.name}>
            <circle cx={pos.x} cy={pos.y} r="18" fill={fill} fillOpacity="0.85" stroke="#1e293b" strokeWidth="1.5"/>
            <text x={pos.x} y={pos.y+4} textAnchor="middle" className="text-[9px] font-bold fill-white">{p.name}</text>
            {p.label && <text x={pos.x} y={pos.y+32} textAnchor="middle" className="text-[9px] fill-slate-600 font-medium">{p.label}</text>}
          </g>
        );
      }))}
    </svg>
  );
}

// ── Tournament Bracket (Knockout) ──
export function TournamentBracket({ rounds, title }) {
  // rounds: [[{p1, p2, winner}, ...], ...]
  const W = 600, H = 50 + rounds[0].length * 60;
  const roundW = W / rounds.length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={16} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      {rounds.map((round, rIdx) => {
        const matchH = (H - 30) / round.length;
        return round.map((match, mIdx) => {
          const x = 10 + rIdx * roundW;
          const y = 30 + mIdx * matchH + matchH/2;
          return (
            <g key={`${rIdx}-${mIdx}`}>
              <rect x={x} y={y-20} width={roundW-20} height="18" rx="2" fill={match.winner === match.p1 ? '#dcfce7' : 'white'} stroke="#94a3b8" strokeWidth="1"/>
              <text x={x+5} y={y-7} className="text-[10px] fill-slate-800 font-medium">{match.p1}</text>
              <rect x={x} y={y+2} width={roundW-20} height="18" rx="2" fill={match.winner === match.p2 ? '#dcfce7' : 'white'} stroke="#94a3b8" strokeWidth="1"/>
              <text x={x+5} y={y+15} className="text-[10px] fill-slate-800 font-medium">{match.p2}</text>
              {rIdx < rounds.length - 1 && (
                <line x1={x+roundW-20} y1={y} x2={x+roundW} y2={y} stroke="#94a3b8"/>
              )}
            </g>
          );
        });
      })}
    </svg>
  );
}

// ── Matrix / Grid Logic Table ──
export function MatrixGrid({ rows, cols, cells, title }) {
  // cells is a 2D array matching rows × cols. Values can be '✓', '✗', '?', or text
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      {title && <div className="px-3 py-2 bg-slate-100 text-xs font-bold text-slate-700 border-b border-slate-200">{title}</div>}
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-2 py-1.5 border-b border-r border-slate-200"></th>
            {cols.map((c, i) => (
              <th key={i} className="px-2 py-1.5 text-center font-bold text-slate-700 border-b border-slate-200">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <th className="px-2 py-1.5 text-left font-bold text-slate-700 border-r border-b border-slate-200 bg-slate-50">{r}</th>
              {cells[i].map((v, j) => {
                const isCheck = v === '✓' || v === true;
                const isCross = v === '✗' || v === false;
                const isUnknown = v === '?' || v === null;
                return (
                  <td key={j} className={`px-2 py-1.5 text-center border-b border-slate-100 font-bold ${
                    isCheck ? 'bg-emerald-100 text-emerald-700' :
                    isCross ? 'bg-rose-100 text-rose-700' :
                    isUnknown ? 'bg-amber-100 text-amber-700' :
                    'text-slate-800'
                  }`}>{v === true ? '✓' : v === false ? '✗' : v}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Network / Route Map ──
export function NetworkMap({ nodes, edges, title }) {
  // nodes: [{id, label, x, y}], edges: [{from, to, weight, directed}]
  const W = 520, H = 340;
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={16} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="16" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#475569"/>
        </marker>
      </defs>
      {edges.map((e, i) => {
        const a = nodeMap[e.from], b = nodeMap[e.to];
        if (!a || !b) return null;
        const midX = (a.x+b.x)/2, midY = (a.y+b.y)/2;
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#475569" strokeWidth="1.5" markerEnd={e.directed ? 'url(#arrowhead)' : undefined}/>
            {e.weight !== undefined && (
              <g>
                <rect x={midX-10} y={midY-9} width="20" height="16" fill="white" stroke="#cbd5e1" rx="2"/>
                <text x={midX} y={midY+3} textAnchor="middle" className="text-[10px] font-bold fill-slate-700">{e.weight}</text>
              </g>
            )}
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="20" fill={COLORS[i % COLORS.length]} fillOpacity="0.85" stroke="#1e293b" strokeWidth="1.5"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" className="text-[10px] font-bold fill-white">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Main dispatcher ──
export default function DiagramRenderer({ diagram }) {
  if (!diagram || !diagram.type) return null;
  switch (diagram.type) {
    case 'venn': return <VennDiagram {...diagram} />;
    case 'seating': return <SeatingArrangement {...diagram} />;
    case 'familyTree': return <FamilyTree {...diagram} />;
    case 'tournament': return <TournamentBracket {...diagram} />;
    case 'matrix': return <MatrixGrid {...diagram} />;
    case 'network': return <NetworkMap {...diagram} />;
    default: return null;
  }
}
