import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { goHome } from '../store/navigationSlice';

// Simple rule-based solver for common CAT question types
function solveQuestion(text) {
  const t = text.trim().toLowerCase();
  const nums = text.match(/-?\d+\.?\d*/g)?.map(Number) || [];

  // Try to detect and solve common patterns
  const steps = [];
  let answer = null;
  let method = '';

  // Percentage
  if (t.includes('% of') || t.includes('percent')) {
    const pMatch = text.match(/(\d+\.?\d*)\s*%\s*of\s*(\d+\.?\d*)/i);
    if (pMatch) {
      const pct = parseFloat(pMatch[1]);
      const val = parseFloat(pMatch[2]);
      answer = (pct / 100) * val;
      method = 'Percentage Calculation';
      steps.push(`${pct}% of ${val}`);
      steps.push(`= (${pct}/100) × ${val}`);
      steps.push(`= ${answer}`);
    }
  }

  // Profit/Loss
  if (t.includes('profit') || t.includes('loss')) {
    const cpMatch = text.match(/(?:cost|cp|bought|purchase).*?(\d+\.?\d*)/i);
    const spMatch = text.match(/(?:sell|sp|sold|selling).*?(\d+\.?\d*)/i);
    if (cpMatch && spMatch) {
      const cp = parseFloat(cpMatch[1]);
      const sp = parseFloat(spMatch[1]);
      const diff = sp - cp;
      const pct = ((diff / cp) * 100).toFixed(2);
      answer = `${diff > 0 ? 'Profit' : 'Loss'} = ${Math.abs(diff)}, ${diff > 0 ? 'Profit' : 'Loss'}% = ${Math.abs(pct)}%`;
      method = 'Profit/Loss';
      steps.push(`CP = ${cp}, SP = ${sp}`);
      steps.push(`${diff > 0 ? 'Profit' : 'Loss'} = SP - CP = ${sp} - ${cp} = ${diff}`);
      steps.push(`${diff > 0 ? 'Profit' : 'Loss'}% = (${Math.abs(diff)}/${cp}) × 100 = ${Math.abs(pct)}%`);
    }
  }

  // Simple Interest
  if (t.includes('simple interest') || t.includes(' si ')) {
    const pMatch = text.match(/(?:principal|sum|amount).*?(\d+)/i);
    const rMatch = text.match(/(\d+\.?\d*)\s*%/);
    const tMatch = text.match(/(\d+\.?\d*)\s*(?:year|yr)/i);
    if (pMatch && rMatch && tMatch) {
      const P = parseFloat(pMatch[1]);
      const R = parseFloat(rMatch[1]);
      const T = parseFloat(tMatch[1]);
      const SI = (P * R * T) / 100;
      answer = `SI = ${SI}, Total Amount = ${P + SI}`;
      method = 'Simple Interest';
      steps.push(`P = ${P}, R = ${R}%, T = ${T} years`);
      steps.push(`SI = (P × R × T) / 100 = (${P} × ${R} × ${T}) / 100`);
      steps.push(`SI = ${SI}`);
      steps.push(`Amount = P + SI = ${P} + ${SI} = ${P + SI}`);
    }
  }

  // Compound Interest
  if (t.includes('compound interest') || t.includes(' ci ')) {
    const pMatch = text.match(/(?:principal|sum|amount).*?(\d+)/i);
    const rMatch = text.match(/(\d+\.?\d*)\s*%/);
    const tMatch = text.match(/(\d+\.?\d*)\s*(?:year|yr)/i);
    if (pMatch && rMatch && tMatch) {
      const P = parseFloat(pMatch[1]);
      const R = parseFloat(rMatch[1]);
      const T = parseFloat(tMatch[1]);
      const A = P * Math.pow(1 + R / 100, T);
      const CI = A - P;
      answer = `CI = ${CI.toFixed(2)}, Amount = ${A.toFixed(2)}`;
      method = 'Compound Interest';
      steps.push(`P = ${P}, R = ${R}%, T = ${T} years`);
      steps.push(`A = P(1 + R/100)^T = ${P}(1 + ${R}/100)^${T}`);
      steps.push(`A = ${A.toFixed(2)}`);
      steps.push(`CI = A - P = ${A.toFixed(2)} - ${P} = ${CI.toFixed(2)}`);
    }
  }

  // Speed-Distance-Time
  if (t.includes('speed') || t.includes('km/h') || t.includes('km/hr') || (t.includes('distance') && t.includes('time'))) {
    const dMatch = text.match(/(\d+\.?\d*)\s*(?:km|m|miles|meter)/i);
    const tMatch = text.match(/(\d+\.?\d*)\s*(?:hour|hr|min|sec)/i);
    const sMatch = text.match(/(\d+\.?\d*)\s*(?:km\/h|km\/hr|m\/s|kmph)/i);
    if (dMatch && tMatch && !sMatch) {
      const d = parseFloat(dMatch[1]);
      const time = parseFloat(tMatch[1]);
      answer = `Speed = ${(d / time).toFixed(2)}`;
      method = 'Speed = Distance / Time';
      steps.push(`Distance = ${d}, Time = ${time}`);
      steps.push(`Speed = ${d} / ${time} = ${(d / time).toFixed(2)}`);
    } else if (sMatch && tMatch && !dMatch) {
      const s = parseFloat(sMatch[1]);
      const time = parseFloat(tMatch[1]);
      answer = `Distance = ${(s * time).toFixed(2)}`;
      method = 'Distance = Speed × Time';
      steps.push(`Speed = ${s}, Time = ${time}`);
      steps.push(`Distance = ${s} × ${time} = ${(s * time).toFixed(2)}`);
    }
  }

  // Average
  if (t.includes('average') || t.includes('mean')) {
    if (nums.length >= 2) {
      const sum = nums.reduce((a, b) => a + b, 0);
      const avg = sum / nums.length;
      answer = avg.toFixed(2);
      method = 'Average';
      steps.push(`Numbers: ${nums.join(', ')}`);
      steps.push(`Sum = ${sum}`);
      steps.push(`Count = ${nums.length}`);
      steps.push(`Average = ${sum} / ${nums.length} = ${avg.toFixed(2)}`);
    }
  }

  // Ratio
  if (t.includes('ratio') && nums.length >= 3) {
    const a = nums[0], b = nums[1], total = nums[2];
    if (a && b && total) {
      const partA = (a / (a + b)) * total;
      const partB = (b / (a + b)) * total;
      answer = `First = ${partA.toFixed(2)}, Second = ${partB.toFixed(2)}`;
      method = 'Ratio Distribution';
      steps.push(`Ratio = ${a}:${b}, Total = ${total}`);
      steps.push(`Sum of ratio parts = ${a + b}`);
      steps.push(`First part = (${a}/${a + b}) × ${total} = ${partA.toFixed(2)}`);
      steps.push(`Second part = (${b}/${a + b}) × ${total} = ${partB.toFixed(2)}`);
    }
  }

  // Work and Time
  if ((t.includes('days') || t.includes('hours')) && (t.includes('work') || t.includes('together') || t.includes('complete'))) {
    if (nums.length >= 2) {
      const rates = nums.slice(0, 3).map(n => 1 / n);
      const combined = rates.reduce((a, b) => a + b, 0);
      const together = 1 / combined;
      answer = `${together.toFixed(2)} days/hours`;
      method = 'Work & Time (LCM Method)';
      nums.slice(0, 3).forEach((n, i) => {
        steps.push(`Worker ${i + 1} rate = 1/${n} per day`);
      });
      steps.push(`Combined rate = ${rates.map(r => r.toFixed(4)).join(' + ')} = ${combined.toFixed(4)}`);
      steps.push(`Time together = 1/${combined.toFixed(4)} = ${together.toFixed(2)} days/hours`);
    }
  }

  // Linear equation: ax + b = c
  if (t.includes('x') && (t.includes('=') || t.includes('find') || t.includes('value'))) {
    const eqMatch = text.match(/(-?\d*\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)?\s*=\s*(-?\d+\.?\d*)/);
    if (eqMatch) {
      const a = parseFloat(eqMatch[1] || '1');
      const b = parseFloat((eqMatch[2] || '0').replace(/\s/g, ''));
      const c = parseFloat(eqMatch[3]);
      const x = (c - b) / a;
      answer = `x = ${x}`;
      method = 'Linear Equation';
      steps.push(`${a}x + ${b} = ${c}`);
      steps.push(`${a}x = ${c} - (${b}) = ${c - b}`);
      steps.push(`x = ${c - b} / ${a} = ${x}`);
    }
  }

  return { answer, method, steps };
}

export default function QuestionSolver() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState(null);
  const [customExplanation, setCustomExplanation] = useState('');

  const handleSolve = () => {
    if (!question.trim()) return;
    const result = solveQuestion(question);
    setSolution(result);
    setCustomExplanation('');
  };

  const handleClear = () => {
    setQuestion('');
    setSolution(null);
    setCustomExplanation('');
  };

  const exampleQuestions = [
    'What is 15% of 800?',
    'A product is bought for 500 and sold for 650. Find the profit percentage.',
    'Find the simple interest on a principal of 10000 at 8% for 3 years.',
    'If 3x + 7 = 22, find the value of x.',
    'A can do a work in 12 days and B can do it in 18 days. How many days will they take working together?',
    'A train travels 240 km in 4 hours. What is the speed in km/hr?',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a237e] text-white flex items-center px-4 py-3">
        <button onClick={() => dispatch(goHome())} className="text-sm text-blue-200 hover:text-white cursor-pointer mr-4">
          &larr; Back to Dashboard
        </button>
        <span className="font-bold">Question Solver</span>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Input Area */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Paste Your Question</h2>
          <p className="text-xs text-gray-500 mb-4">Supports arithmetic, percentage, profit/loss, interest, speed-distance-time, ratio, work-time, and linear equations</p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Paste or type your question here...&#10;&#10;Example: A shopkeeper buys an article for ₹500 and sells it for ₹650. What is the profit percentage?"
            className="w-full h-40 border-2 border-gray-300 rounded-lg p-4 text-sm focus:border-blue-500 focus:outline-none resize-none"
          />

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleSolve}
              disabled={!question.trim()}
              className="px-6 py-2.5 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              Solve It
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Solution */}
        {solution && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Solution</h3>

            {solution.answer ? (
              <>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Method: </span>
                  <span className="text-sm font-semibold text-blue-700">{solution.method}</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Step-by-Step</p>
                  {solution.steps.map((step, i) => (
                    <div key={i} className="text-sm text-gray-700 py-1 flex gap-2">
                      <span className="text-gray-400 font-mono text-xs mt-0.5">Step {i + 1}:</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Answer:</p>
                  <p className="text-xl font-bold text-green-700">{solution.answer}</p>
                </div>
              </>
            ) : (
              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <p className="text-sm text-amber-800 font-semibold mb-2">
                  Could not auto-solve this question type.
                </p>
                <p className="text-sm text-gray-600">
                  This solver handles common CAT math patterns (percentage, profit/loss, interest, speed, ratio, work-time, linear equations).
                  For RC, DILR, or complex questions, please break down the problem manually.
                </p>
              </div>
            )}

            {/* Manual explanation area */}
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-500 mb-1">Add your own notes / explanation:</p>
              <textarea
                value={customExplanation}
                onChange={(e) => setCustomExplanation(e.target.value)}
                placeholder="Write your own working or notes here..."
                className="w-full h-24 border border-gray-300 rounded-lg p-3 text-sm focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
          </div>
        )}

        {/* Example Questions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Try these examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {exampleQuestions.map((eq, i) => (
              <button
                key={i}
                onClick={() => { setQuestion(eq); setSolution(null); }}
                className="text-left text-xs text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
              >
                {eq}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
