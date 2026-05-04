import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily } from '../../../constants/GlobalStyles';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao MedConnect</Text>
      <Text style={styles.description}>
        Sua saúde conectada em um só lugar. Monitore seus sinais vitais e mantenha seu histórico médico sempre acessível.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});
