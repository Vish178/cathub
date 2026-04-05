import { useState } from 'react';

export default function Calculator({ onClose }) {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error';
      default: return b;
    }
  };

  const performOperation = (nextOp) => {
    const current = parseFloat(display);
    if (prevValue !== null && operator && !waitingForOperand) {
      const result = calculate(prevValue, current, operator);
      if (result === 'Error') {
        setDisplay('Error');
        setPrevValue(null);
        setOperator(null);
        return;
      }
      setDisplay(String(parseFloat(result.toFixed(10))));
      setPrevValue(result);
    } else {
      setPrevValue(current);
    }
    setOperator(nextOp);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    const current = parseFloat(display);
    if (prevValue !== null && operator) {
      const result = calculate(prevValue, current, operator);
      setDisplay(result === 'Error' ? 'Error' : String(parseFloat(result.toFixed(10))));
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleSqrt = () => {
    const val = parseFloat(display);
    if (val < 0) { setDisplay('Error'); return; }
    setDisplay(String(parseFloat(Math.sqrt(val).toFixed(10))));
    setWaitingForOperand(true);
  };

  const handlePercent = () => {
    const val = parseFloat(display);
    setDisplay(String(parseFloat((val / 100).toFixed(10))));
    setWaitingForOperand(true);
  };

  const handleReciprocal = () => {
    const val = parseFloat(display);
    if (val === 0) { setDisplay('Error'); return; }
    setDisplay(String(parseFloat((1 / val).toFixed(10))));
    setWaitingForOperand(true);
  };

  const handleNegate = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const btn = (label, onClick, className = '') => (
    <button
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className={`h-9 text-sm font-semibold border border-gray-300 rounded cursor-pointer
        select-none active:scale-95 transition-transform ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-2xl border border-gray-300 w-72 select-none"
         style={{ cursor: 'default' }}>
      {/* Title bar */}
      <div className="flex items-center justify-between bg-gray-700 text-white px-3 py-1.5 rounded-t-lg">
        <span className="text-xs font-semibold">Calculator</span>
        <button onClick={onClose} className="text-white hover:text-red-300 text-lg leading-none cursor-pointer">&times;</button>
      </div>

      {/* Display */}
      <div className="bg-gray-100 mx-2 mt-2 p-2 text-right text-lg font-mono border border-gray-300 rounded overflow-x-auto">
        {display}
      </div>

      {/* Memory row */}
      <div className="grid grid-cols-5 gap-1 px-2 mt-2">
        {btn('MC', () => setMemory(0), 'bg-purple-50 text-purple-700 text-xs')}
        {btn('MR', () => { setDisplay(String(memory)); setWaitingForOperand(true); }, 'bg-purple-50 text-purple-700 text-xs')}
        {btn('M+', () => setMemory(memory + parseFloat(display)), 'bg-purple-50 text-purple-700 text-xs')}
        {btn('M-', () => setMemory(memory - parseFloat(display)), 'bg-purple-50 text-purple-700 text-xs')}
        {btn('MS', () => setMemory(parseFloat(display)), 'bg-purple-50 text-purple-700 text-xs')}
      </div>

      {/* Main buttons */}
      <div className="grid grid-cols-5 gap-1 p-2">
        {btn('√', handleSqrt, 'bg-orange-50 text-orange-700')}
        {btn('%', handlePercent, 'bg-orange-50 text-orange-700')}
        {btn('1/x', handleReciprocal, 'bg-orange-50 text-orange-700 text-xs')}
        {btn('CE', clear, 'bg-red-50 text-red-700')}
        {btn('C', clear, 'bg-red-50 text-red-700')}

        {btn('7', () => inputDigit(7), 'bg-white hover:bg-gray-100')}
        {btn('8', () => inputDigit(8), 'bg-white hover:bg-gray-100')}
        {btn('9', () => inputDigit(9), 'bg-white hover:bg-gray-100')}
        {btn('÷', () => performOperation('/'), 'bg-orange-50 text-orange-700')}
        {btn('⌫', handleBackspace, 'bg-gray-100 text-gray-700')}

        {btn('4', () => inputDigit(4), 'bg-white hover:bg-gray-100')}
        {btn('5', () => inputDigit(5), 'bg-white hover:bg-gray-100')}
        {btn('6', () => inputDigit(6), 'bg-white hover:bg-gray-100')}
        {btn('×', () => performOperation('*'), 'bg-orange-50 text-orange-700')}
        {btn('±', handleNegate, 'bg-gray-100 text-gray-700')}

        {btn('1', () => inputDigit(1), 'bg-white hover:bg-gray-100')}
        {btn('2', () => inputDigit(2), 'bg-white hover:bg-gray-100')}
        {btn('3', () => inputDigit(3), 'bg-white hover:bg-gray-100')}
        {btn('-', () => performOperation('-'), 'bg-orange-50 text-orange-700')}
        <div></div>

        {btn('0', () => inputDigit(0), 'col-span-2 bg-white hover:bg-gray-100')}
        {btn('.', inputDot, 'bg-white hover:bg-gray-100')}
        {btn('+', () => performOperation('+'), 'bg-orange-50 text-orange-700')}
        {btn('=', handleEquals, 'bg-blue-600 text-white hover:bg-blue-700')}
      </div>
    </div>
  );
}
