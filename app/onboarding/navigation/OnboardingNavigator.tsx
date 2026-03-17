import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StepIndicator from '../components/StepIndicator';
import useOnboardingFlow from '../hooks/UseOnboardingFlow';
import AuthScreen from '../screens/AuthScreen';
import Step1Screen from '../screens/Step1Screen';
import Step2Screen from '../screens/Step2Screen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default function OnboardingNavigator() {
  const { currentStep, totalSteps, nextStep, previousStep, isFirstStep, isLastStep } = useOnboardingFlow();

  const renderScreen = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen />;
      case 1:
        return <Step1Screen />;
      case 2:
        return <Step2Screen />;
      case 3:
        return <AuthScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {!isLastStep && (
        <View style={styles.footer}>
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          
          <View style={styles.buttonContainer}>
            {!isFirstStep && (
              <TouchableOpacity 
                style={[styles.button, styles.buttonSecondary]} 
                onPress={previousStep}
              >
                <Text style={styles.buttonSecondaryText}>Voltar</Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity 
              style={[styles.button, styles.buttonPrimary, isFirstStep && styles.buttonFull]} 
              onPress={nextStep}
            >
              <Text style={styles.buttonPrimaryText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#F24D50',
  },
  buttonSecondary: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  buttonFull: {
    flex: 1,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondaryText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
});
