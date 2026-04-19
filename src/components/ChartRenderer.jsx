// SVG Chart Renderer for DI questions
// Supports: bar (vertical/horizontal), stacked bar, multi-line, pie,
//           pie-comparative, scatter, bubble, radar/spider, data-table, combination

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'];

function axisTicks(maxVal, count = 5) {
  const step = Math.ceil(maxVal / count / 10) * 10 || 1;
  const ticks = [];
  for (let i = 0; i <= count; i++) ticks.push(i * step);
  return ticks;
}

// ── Vertical / Horizontal Bar Chart ──
export function BarChart({ data, title, orientation = 'vertical', xLabel, yLabel, height = 280, showValues = true }) {
  const maxVal = Math.max(...data.map((d) => (Array.isArray(d.value) ? Math.max(...d.value) : d.value)));
  const ticks = axisTicks(maxVal);
  const chartMax = ticks[ticks.length - 1];

  if (orientation === 'horizontal') {
    const W = 520, H = height, PAD_L = 120, PAD_R = 20, PAD_T = 30, PAD_B = 40;
    const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
    const barH = plotH / data.length * 0.7;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
        {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
        {/* X axis */}
        <line x1={PAD_L} y1={H-PAD_B} x2={W-PAD_R} y2={H-PAD_B} stroke="#94a3b8" strokeWidth="1"/>
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={PAD_L + (t/chartMax)*plotW} y1={PAD_T} x2={PAD_L + (t/chartMax)*plotW} y2={H-PAD_B} stroke="#e2e8f0" strokeWidth="0.5"/>
            <text x={PAD_L + (t/chartMax)*plotW} y={H-PAD_B+15} textAnchor="middle" className="text-[9px] fill-slate-500">{t}</text>
          </g>
        ))}
        {data.map((d, i) => {
          const y = PAD_T + (i + 0.15) * (plotH / data.length);
          const w = (d.value / chartMax) * plotW;
          return (
            <g key={i}>
              <text x={PAD_L - 5} y={y + barH/2 + 3} textAnchor="end" className="text-[10px] fill-slate-700 font-medium">{d.label}</text>
              <rect x={PAD_L} y={y} width={w} height={barH} fill={d.color || COLORS[i % COLORS.length]} rx="2"/>
              {showValues && <text x={PAD_L + w + 4} y={y + barH/2 + 3} className="text-[9px] fill-slate-700 font-bold">{d.value}</text>}
            </g>
          );
        })}
      </svg>
    );
  }

  // Vertical
  const W = 520, H = height, PAD_L = 45, PAD_R = 15, PAD_T = 30, PAD_B = 50;
  const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
  const groupCount = Array.isArray(data[0].value) ? data[0].value.length : 1;
  const groupW = plotW / data.length;
  const barW = groupW / (groupCount + 0.5) * 0.75;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H-PAD_B} stroke="#94a3b8" strokeWidth="1"/>
      <line x1={PAD_L} y1={H-PAD_B} x2={W-PAD_R} y2={H-PAD_B} stroke="#94a3b8" strokeWidth="1"/>
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={PAD_L} y1={H-PAD_B-(t/chartMax)*plotH} x2={W-PAD_R} y2={H-PAD_B-(t/chartMax)*plotH} stroke="#e2e8f0" strokeWidth="0.5"/>
          <text x={PAD_L-5} y={H-PAD_B-(t/chartMax)*plotH+3} textAnchor="end" className="text-[9px] fill-slate-500">{t}</text>
        </g>
      ))}
      {data.map((d, i) => {
        const values = Array.isArray(d.value) ? d.value : [d.value];
        return values.map((v, j) => {
          const h = (v / chartMax) * plotH;
          const x = PAD_L + i * groupW + (groupW - barW * groupCount) / 2 + j * barW;
          return (
            <g key={`${i}-${j}`}>
              <rect x={x} y={H-PAD_B-h} width={barW-1} height={h} fill={COLORS[j % COLORS.length]} rx="2"/>
              {showValues && <text x={x + barW/2} y={H-PAD_B-h-3} textAnchor="middle" className="text-[8px] fill-slate-700 font-bold">{v}</text>}
            </g>
          );
        });
      })}
      {data.map((d, i) => (
        <text key={`lbl-${i}`} x={PAD_L + i*groupW + groupW/2} y={H-PAD_B+14} textAnchor="middle" className="text-[9px] fill-slate-600">{d.label}</text>
      ))}
      {yLabel && <text x={12} y={H/2} transform={`rotate(-90 12 ${H/2})`} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{yLabel}</text>}
      {xLabel && <text x={W/2} y={H-5} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{xLabel}</text>}
    </svg>
  );
}

// ── Stacked Bar Chart ──
export function StackedBarChart({ data, categories, title, height = 280 }) {
  const W = 520, H = height, PAD_L = 45, PAD_R = 100, PAD_T = 30, PAD_B = 50;
  const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
  const totals = data.map((d) => d.values.reduce((a, b) => a + b, 0));
  const maxTotal = Math.max(...totals);
  const ticks = axisTicks(maxTotal);
  const chartMax = ticks[ticks.length - 1];
  const barW = plotW / data.length * 0.7;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H-PAD_B} stroke="#94a3b8"/>
      <line x1={PAD_L} y1={H-PAD_B} x2={W-PAD_R} y2={H-PAD_B} stroke="#94a3b8"/>
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={PAD_L} y1={H-PAD_B-(t/chartMax)*plotH} x2={W-PAD_R} y2={H-PAD_B-(t/chartMax)*plotH} stroke="#e2e8f0" strokeWidth="0.5"/>
          <text x={PAD_L-5} y={H-PAD_B-(t/chartMax)*plotH+3} textAnchor="end" className="text-[9px] fill-slate-500">{t}</text>
        </g>
      ))}
      {data.map((d, i) => {
        let acc = 0;
        const x = PAD_L + i*(plotW/data.length) + (plotW/data.length - barW)/2;
        return d.values.map((v, j) => {
          const h = (v/chartMax)*plotH;
          const y = H - PAD_B - acc - h;
          acc += h;
          return (
            <g key={`${i}-${j}`}>
              <rect x={x} y={y} width={barW} height={h} fill={COLORS[j % COLORS.length]}/>
              {h > 18 && <text x={x + barW/2} y={y + h/2 + 3} textAnchor="middle" className="text-[8px] fill-white font-bold">{v}</text>}
            </g>
          );
        });
      })}
      {data.map((d, i) => (
        <text key={`lbl-${i}`} x={PAD_L + i*(plotW/data.length) + plotW/data.length/2} y={H-PAD_B+14} textAnchor="middle" className="text-[9px] fill-slate-600">{d.label}</text>
      ))}
      {/* Legend */}
      {categories.map((c, i) => (
        <g key={`leg-${i}`} transform={`translate(${W-PAD_R+8} ${PAD_T+i*16})`}>
          <rect x="0" y="0" width="10" height="10" fill={COLORS[i % COLORS.length]}/>
          <text x="14" y="9" className="text-[9px] fill-slate-700">{c}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Multi-Line Chart ──
export function LineChart({ data, series, title, xLabel, yLabel, height = 280 }) {
  const W = 520, H = height, PAD_L = 45, PAD_R = 100, PAD_T = 30, PAD_B = 50;
  const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
  const allValues = series.flatMap((s) => s.values);
  const maxVal = Math.max(...allValues);
  const ticks = axisTicks(maxVal);
  const chartMax = ticks[ticks.length - 1];
  const xStep = plotW / (data.length - 1);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H-PAD_B} stroke="#94a3b8"/>
      <line x1={PAD_L} y1={H-PAD_B} x2={W-PAD_R} y2={H-PAD_B} stroke="#94a3b8"/>
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={PAD_L} y1={H-PAD_B-(t/chartMax)*plotH} x2={W-PAD_R} y2={H-PAD_B-(t/chartMax)*plotH} stroke="#e2e8f0" strokeWidth="0.5"/>
          <text x={PAD_L-5} y={H-PAD_B-(t/chartMax)*plotH+3} textAnchor="end" className="text-[9px] fill-slate-500">{t}</text>
        </g>
      ))}
      {series.map((s, i) => {
        const color = s.color || COLORS[i % COLORS.length];
        const points = s.values.map((v, j) => `${PAD_L + j*xStep},${H-PAD_B-(v/chartMax)*plotH}`).join(' ');
        return (
          <g key={i}>
            <polyline points={points} fill="none" stroke={color} strokeWidth="2"/>
            {s.values.map((v, j) => (
              <circle key={j} cx={PAD_L+j*xStep} cy={H-PAD_B-(v/chartMax)*plotH} r="3" fill={color}/>
            ))}
          </g>
        );
      })}
      {data.map((d, i) => (
        <text key={i} x={PAD_L+i*xStep} y={H-PAD_B+14} textAnchor="middle" className="text-[9px] fill-slate-600">{d}</text>
      ))}
      {series.map((s, i) => (
        <g key={`leg-${i}`} transform={`translate(${W-PAD_R+8} ${PAD_T+i*16})`}>
          <line x1="0" y1="5" x2="12" y2="5" stroke={s.color || COLORS[i % COLORS.length]} strokeWidth="2"/>
          <text x="16" y="9" className="text-[9px] fill-slate-700">{s.label}</text>
        </g>
      ))}
      {xLabel && <text x={W/2} y={H-5} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{xLabel}</text>}
      {yLabel && <text x={12} y={H/2} transform={`rotate(-90 12 ${H/2})`} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{yLabel}</text>}
    </svg>
  );
}

// ── Pie Chart (single or side-by-side comparative) ──
export function PieChart({ data, title, size = 200, showLabels = true }) {
  const total = data.reduce((a, d) => a + d.value, 0);
  const cx = size / 2, cy = size / 2, r = size / 2 - 8;
  let angle = -Math.PI / 2;

  return (
    <div className="inline-block bg-white rounded-lg border border-slate-200 p-3">
      {title && <div className="text-xs font-bold text-slate-700 text-center mb-2">{title}</div>}
      <div className="flex items-center gap-3">
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
          {data.map((d, i) => {
            const slice = (d.value / total) * 2 * Math.PI;
            const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
            const x2 = cx + r * Math.cos(angle + slice), y2 = cy + r * Math.sin(angle + slice);
            const large = slice > Math.PI ? 1 : 0;
            const path = `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`;
            const midAngle = angle + slice / 2;
            const lx = cx + (r * 0.65) * Math.cos(midAngle), ly = cy + (r * 0.65) * Math.sin(midAngle);
            angle += slice;
            const pct = ((d.value / total) * 100).toFixed(0);
            return (
              <g key={i}>
                <path d={path} fill={d.color || COLORS[i % COLORS.length]} stroke="white" strokeWidth="1"/>
                {showLabels && slice > 0.2 && (
                  <text x={lx} y={ly} textAnchor="middle" className="text-[9px] fill-white font-bold">{pct}%</text>
                )}
              </g>
            );
          })}
        </svg>
        <div className="flex flex-col gap-1 text-[10px]">
          {data.map((d, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm" style={{ background: d.color || COLORS[i % COLORS.length] }}></span>
              <span className="text-slate-700">{d.label}</span>
              <span className="text-slate-500 font-semibold">({d.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComparativePieChart({ charts }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {charts.map((c, i) => <PieChart key={i} {...c} />)}
    </div>
  );
}

// ── Scatter / Bubble ──
export function ScatterChart({ points, title, xLabel, yLabel, height = 280, isBubble = false }) {
  const W = 520, H = height, PAD_L = 45, PAD_R = 20, PAD_T = 30, PAD_B = 40;
  const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
  const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
  const xMax = Math.max(...xs), yMax = Math.max(...ys);
  const xTicks = axisTicks(xMax), yTicks = axisTicks(yMax);
  const xM = xTicks[xTicks.length - 1], yM = yTicks[yTicks.length - 1];
  const rMax = isBubble ? Math.max(...points.map((p) => p.r || 1)) : 1;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={W/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H-PAD_B} stroke="#94a3b8"/>
      <line x1={PAD_L} y1={H-PAD_B} x2={W-PAD_R} y2={H-PAD_B} stroke="#94a3b8"/>
      {yTicks.map((t, i) => (
        <g key={`y${i}`}>
          <line x1={PAD_L} y1={H-PAD_B-(t/yM)*plotH} x2={W-PAD_R} y2={H-PAD_B-(t/yM)*plotH} stroke="#e2e8f0" strokeWidth="0.5"/>
          <text x={PAD_L-5} y={H-PAD_B-(t/yM)*plotH+3} textAnchor="end" className="text-[9px] fill-slate-500">{t}</text>
        </g>
      ))}
      {xTicks.map((t, i) => (
        <text key={`x${i}`} x={PAD_L+(t/xM)*plotW} y={H-PAD_B+14} textAnchor="middle" className="text-[9px] fill-slate-500">{t}</text>
      ))}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={PAD_L+(p.x/xM)*plotW} cy={H-PAD_B-(p.y/yM)*plotH} r={isBubble ? 4 + (p.r/rMax)*14 : 4} fill={p.color || COLORS[i % COLORS.length]} fillOpacity="0.7" stroke={p.color || COLORS[i % COLORS.length]}/>
          {p.label && <text x={PAD_L+(p.x/xM)*plotW+6} y={H-PAD_B-(p.y/yM)*plotH-4} className="text-[8px] fill-slate-600">{p.label}</text>}
        </g>
      ))}
      {xLabel && <text x={W/2} y={H-5} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{xLabel}</text>}
      {yLabel && <text x={12} y={H/2} transform={`rotate(-90 12 ${H/2})`} textAnchor="middle" className="text-[9px] fill-slate-500 font-medium">{yLabel}</text>}
    </svg>
  );
}

// ── Radar / Spider Chart ──
export function RadarChart({ axes, series, title, size = 320 }) {
  const cx = size / 2, cy = size / 2, r = size / 2 - 40;
  const n = axes.length;
  const angleFor = (i) => -Math.PI / 2 + (2 * Math.PI * i) / n;
  const maxVal = Math.max(...series.flatMap((s) => s.values));
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg viewBox={`0 0 ${size} ${size+30}`} className="w-full h-auto bg-white rounded-lg border border-slate-200">
      {title && <text x={size/2} y={18} textAnchor="middle" className="text-xs font-bold fill-slate-700">{title}</text>}
      {/* Rings */}
      {rings.map((f, i) => {
        const pts = [];
        for (let j = 0; j < n; j++) {
          const a = angleFor(j);
          pts.push(`${cx + r*f*Math.cos(a)},${cy + r*f*Math.sin(a)}`);
        }
        return <polygon key={i} points={pts.join(' ')} fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>;
      })}
      {/* Axes */}
      {axes.map((ax, i) => {
        const a = angleFor(i);
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={cx+r*Math.cos(a)} y2={cy+r*Math.sin(a)} stroke="#cbd5e1" strokeWidth="0.5"/>
            <text x={cx+(r+14)*Math.cos(a)} y={cy+(r+14)*Math.sin(a)+3} textAnchor="middle" className="text-[9px] fill-slate-600 font-medium">{ax}</text>
          </g>
        );
      })}
      {/* Data polygons */}
      {series.map((s, idx) => {
        const color = s.color || COLORS[idx % COLORS.length];
        const pts = s.values.map((v, j) => {
          const a = angleFor(j), f = v/maxVal;
          return `${cx + r*f*Math.cos(a)},${cy + r*f*Math.sin(a)}`;
        });
        return (
          <g key={idx}>
            <polygon points={pts.join(' ')} fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2"/>
            {s.values.map((v, j) => {
              const a = angleFor(j), f = v/maxVal;
              return <circle key={j} cx={cx+r*f*Math.cos(a)} cy={cy+r*f*Math.sin(a)} r="2.5" fill={color}/>;
            })}
          </g>
        );
      })}
      {/* Legend */}
      {series.map((s, i) => (
        <g key={`leg-${i}`} transform={`translate(10 ${size+12+i*12})`}>
          <rect x="0" y="0" width="10" height="8" fill={s.color || COLORS[i % COLORS.length]} fillOpacity="0.3" stroke={s.color || COLORS[i % COLORS.length]}/>
          <text x="14" y="7" className="text-[9px] fill-slate-700">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Data Table (with optional missing value "?") ──
export function DataTable({ headers, rows, title, caption }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      {title && <div className="px-3 py-2 bg-slate-100 text-xs font-bold text-slate-700 border-b border-slate-200">{title}</div>}
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-bold text-slate-700 border-b border-slate-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, j) => {
                const isMissing = cell === '?' || cell === null || cell === undefined;
                return (
                  <td key={j} className={`px-3 py-1.5 border-b border-slate-100 ${isMissing ? 'bg-amber-100 text-amber-700 font-bold text-center' : 'text-slate-800'}`}>
                    {isMissing ? '?' : cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <div className="px-3 py-1.5 text-[10px] text-slate-500 italic border-t border-slate-200">{caption}</div>}
    </div>
  );
}

// ── Main dispatcher ──
// Takes a chartData object: { type: 'bar'|'pie'|'line'|... , ... }
export default function ChartRenderer({ chart }) {
  if (!chart || !chart.type) return null;
  switch (chart.type) {
    case 'bar': return <BarChart {...chart} />;
    case 'stackedBar': return <StackedBarChart {...chart} />;
    case 'line': return <LineChart {...chart} />;
    case 'pie': return <PieChart {...chart} />;
    case 'piePair': return <ComparativePieChart charts={chart.charts} />;
    case 'scatter': return <ScatterChart {...chart} />;
    case 'bubble': return <ScatterChart {...chart} isBubble={true} />;
    case 'radar': return <RadarChart {...chart} />;
    case 'table': return <DataTable {...chart} />;
    case 'combination':
      return (
        <div className="space-y-3">
          {chart.charts.map((c, i) => <ChartRenderer key={i} chart={c} />)}
        </div>
      );
    default: return null;
  }
}
