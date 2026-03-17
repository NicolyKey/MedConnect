import { useState } from 'react';

export default function useOnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return {
    currentStep,
    totalSteps,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep,
    isLastStep,
  };
}
