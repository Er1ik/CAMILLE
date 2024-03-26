import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CalcularAreaTriangulo = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  const calcularArea = () => {
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    if (isNaN(baseNum) || isNaN(alturaNum)) {
      setArea('Por favor, insira valores válidos para base e altura.');
    } else {
      const areaTriangulo = (baseNum * alturaNum) / 2;
      setArea(areaTriangulo.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Área do Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Base"
        keyboardType="numeric"
        onChangeText={setBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        keyboardType="numeric"
        onChangeText={setAltura}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      <Text style={styles.resultado}>Área: {area}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10,
  },
  resultado: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default CalcularAreaTriangulo;
