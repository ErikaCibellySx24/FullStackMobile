import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [manager, setManager] = useState('');
  const [observations, setObservations] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleContractNumberChange = (text) => {
    setContractNumber(text);
  };

  const handleServiceTypeChange = (text) => {
    setServiceType(text);
  };

  const handleManagerChange = (text) => {
    setManager(text);
  };

  const handleObservationsChange = (text) => {
    setObservations(text);
  };

  const handleSubmit = () => {
    console.log('Nome:', name);
    console.log('Número do Contrato:', contractNumber);
    console.log('Tipo de Serviço:', serviceType);
    console.log('Gestor:', manager);
    console.log('Observações:', observations);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <View style={styles.container}>
        <Text>Adicionar novo contrato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={handleNameChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Número do Contrato"
        value={contractNumber}
        onChangeText={handleContractNumberChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo de Serviço"
        value={serviceType}
        onChangeText={handleServiceTypeChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Gestor"
        value={manager}
        onChangeText={handleManagerChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observations}
        onChangeText={handleObservationsChange}
        multiline={true}
      />

      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: '#467857',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;
