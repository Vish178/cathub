import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementTimer, forceSectionTransition } from '../store/examSessionSlice';

export const useExamTimer = () => {
  const dispatch = useDispatch();
  const timeRemaining = useSelector((state) => state.examSession.timeRemainingInSeconds);
  const examStatus = useSelector((state) => state.examSession.examStatus);
  const currentSectionIndex = useSelector((state) => state.examSession.currentSectionIndex);
  const intervalIdRef = useRef(null);
  const timeRef = useRef(timeRemaining);

  timeRef.current = timeRemaining;

  const tick = useCallback(() => {
    if (timeRef.current > 1) {
      dispatch(decrementTimer());
    } else {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      dispatch(forceSectionTransition());
    }
  }, [dispatch]);

  useEffect(() => {
    if (examStatus !== 'IN_PROGRESS') {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      return;
    }

    intervalIdRef.current = setInterval(tick, 1000);
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [examStatus, currentSectionIndex, tick]);

  return timeRemaining;
};
