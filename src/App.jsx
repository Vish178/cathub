import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import StartScreen from './components/StartScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import PracticeSeries from './components/PracticeSeries';
import QuestionSolver from './components/QuestionSolver';

function App() {
  const currentPage = useSelector((s) => s.navigation.currentPage);
  const examStatus = useSelector((s) => s.examSession.examStatus);

  // Exam flow overrides navigation
  if (currentPage === 'exam-start' || currentPage === 'exam') {
    if (examStatus === 'COMPLETED') return <ResultsScreen />;
    if (examStatus === 'IN_PROGRESS') return <ExamScreen />;
    return <StartScreen />;
  }

  if (currentPage === 'results') return <ResultsScreen />;
  if (currentPage === 'practice') return <PracticeSeries />;
  if (currentPage === 'solver') return <QuestionSolver />;

  return <Dashboard />;
}

export default App;
