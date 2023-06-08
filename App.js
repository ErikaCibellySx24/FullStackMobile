import React from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  StyleSheet, 
  Image
}
from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const handleNavigateToContracts = () => {
    navigation.navigate('Contratos');
  };


  const handleNavigateToEditContracts = () => {
    navigation.navigate('EditarContrato');
  };

  const handleNavigateToNotasFiscais = () => {
    navigation.navigate('NotasFiscais');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Image source={require("./assets/logo-rm.png")} style={styles.image} />

      <TouchableHighlight
        onPress={handleNavigateToContracts}
        style={styles.button}
        underlayColor="#467857"
        >
        <Text>CONTRATOS</Text>
      </TouchableHighlight>

      <TouchableOpacity 
        onPress={handleNavigateToEditContracts}
        style={styles.button}
        underlayColor="#467857"
        >
        <Text>EDITAR CONTRATOS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={handleNavigateToNotasFiscais}
        style={styles.button}
        underlayColor="#467857"
        >
        <Text>NOTAS FISCAIS</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight:  36.45,
    fontSize: 30,
    marginBottom: 10,
    top: -100,
    color: '#062E13',
  },
  image: {
    width: 195,
    height: 94,
    top: -70,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#467857',
    padding: 20,
    width: 324,
    height: 45,
    borderRadius: 16,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});

export default App;
