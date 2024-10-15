// HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('App')}
      >
        <Text style={styles.buttonText}>Localização</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Camera')}
      >
        <Text style={styles.buttonText}>Câmera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,  // Definindo o preenchimento vertical
    paddingHorizontal: 30, // Definindo o preenchimento horizontal
    margin: 10,
    borderRadius: 5,
    width: 200, // Largura fixa
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
