
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompleteTest } from '@/contexts/CompleteTestContext';

const CompleteTest = () => {
  const navigate = useNavigate();
  const { setCurrentTestStep, resetAllTests } = useCompleteTest();
  
  useEffect(() => {
    // Reset all test data when starting a new complete test
    resetAllTests();
    
    // Start with Pe. Hock test
    setCurrentTestStep('peHock');
    
    // Navigate to the introduction page
    navigate('/complete-test-intro');
  }, [navigate, setCurrentTestStep, resetAllTests]);

  return null;
};

export default CompleteTest;
