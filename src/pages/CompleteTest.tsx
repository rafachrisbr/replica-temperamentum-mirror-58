
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompleteTest } from '@/contexts/CompleteTestContext';

const CompleteTest = () => {
  const navigate = useNavigate();
  const { setCurrentTestStep } = useCompleteTest();
  
  useEffect(() => {
    // Start with Pe. Hock test
    setCurrentTestStep('peHock');
    navigate('/complete-test-intro');
  }, [navigate, setCurrentTestStep]);

  return null;
};

export default CompleteTest;
