import { useExamTimer } from '../hooks/useExamTimer';

export default function Timer() {
  const timeRemaining = useExamTimer();

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const isLow = timeRemaining <= 300; // 5 minutes
  const isCritical = timeRemaining <= 60; // 1 minute

  return (
    <div className={`font-mono text-lg font-bold tabular-nums ${
      isCritical ? 'text-red-600 animate-pulse' :
      isLow ? 'text-orange-500' : 'text-white'
    }`}>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}
