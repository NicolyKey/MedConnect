import React, { useMemo } from 'react';
import { ImageBackground, PanResponder, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StepIndicator from '../components/StepIndicator';
import useOnboardingFlow from '../hooks/UseOnboardingFlow';
import AuthScreen from '../screens/AuthScreen';
import Step1Screen from '../screens/Step1Screen';
import Step2Screen from '../screens/Step2Screen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default function OnboardingNavigator() {
  const { currentStep, totalSteps, nextStep, previousStep, skipToEnd, isFirstStep, isLastStep } = useOnboardingFlow();

  const panResponder = useMemo(
    () => PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50 && !isLastStep) {
          nextStep();
        } else if (gestureState.dx > 50 && !isFirstStep) {
          previousStep();
        }
      },
    }), [isFirstStep, isLastStep, nextStep, previousStep]);

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
      <View style={styles.content} {...panResponder.panHandlers}>
        {renderScreen()}
      </View>

      {!isLastStep && (
        <ImageBackground 
          source={currentStep === 0 ? require('@/assets/images/Ellipse 7.png') : undefined}
          style={styles.footer}
          resizeMode="stretch"
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[
                styles.button, 
                currentStep === 0 ? styles.buttonSecondaryWhite : styles.buttonSecondary
              ]} 
              onPress={skipToEnd}
            >
              <Text style={[
                styles.buttonSecondaryText,
                currentStep === 0 && styles.buttonSecondaryTextWhite
              ]}>Pular</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.buttonPrimary]} 
              onPress={nextStep}
            >
              <Text style={styles.buttonPrimaryText}>Próximo</Text>
            </TouchableOpacity>
          </View>
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        </ImageBackground>
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
    height: 150,
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
    backgroundColor: '#F9D2DB',
  },
  buttonSecondaryWhite: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F24D50',
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
    color: '#930611',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondaryTextWhite: {
    color: '#F24D50',
  },
});
