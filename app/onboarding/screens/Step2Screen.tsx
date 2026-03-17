import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily } from '../../../constants/GlobalStyles';

export default function Step2Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="cellphone-check" size={64} color="#F59E0B" />
      </View>
      <Text style={styles.title}>Acesso Rápido e Fácil</Text>
      <Text style={styles.description}>
        Interface intuitiva e simples de usar. Registre suas medições em segundos e visualize seu histórico completo.
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
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
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
