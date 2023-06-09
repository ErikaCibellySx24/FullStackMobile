import React from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  Linking, 
  StyleSheet, 
  Image,
  ImageBackground,
  handleButtonPress,
  FlatList

}
from 'react-native';



const Home = () => {
  const handleButtonPressContratos = () => {
    Linking.openURL('contrato');
  };
  const handleButtonPressEditarContrato = () => {
    Linking.openURL('EditarContrato');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Image source={require("./assets/logo-rm.png")} style={styles.image} />

      <TouchableHighlight
        onPress={handleButtonPressContratos}
        style={styles.button}
        underlayColor="#467857"
        >
        <Text>CONTRATOS</Text>
      </TouchableHighlight>

      <TouchableOpacity 
        onPress={handleButtonPressEditarContrato}
        style={styles.button}
        underlayColor="#467857"
        >
        <Text>PLANILHAS DE NF</Text>
      </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleButtonPress}
          style={styles.button}
         underlayColor="#467857"
          >
         <Text>NOTAS FISCAIS</Text>
        </TouchableOpacity>
        <ImageBackground source={require('./assets/Background_app.png')} style={styles.Imgbkg}></ImageBackground> 
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imgbkg: {

    resizeMode: 'cover',
    width: 600,
    height: 704,
    top: -100,
    transform: [{rotate: '-10.35deg'}],
    opacity: 100,


  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight:  36.45,
    fontSize: 30,
    marginBottom: 10,
    top: 280,
    color: '#062E13',
  },
  image: {
    width: 195,
    height: 94,
    top: 300,
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#467857',
    padding: 20,
    width: 324,
    height: 45,
    top: 400,
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

export default Home;
