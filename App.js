import React from "react";
import { Component } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList} from "react-native";
import api from './src/Services/Api';
import Contratos from "./src/Pages/Contratos";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contratos: []
    }
  }

  async componentDidMount(){
    const response = await api.get('/contratos');
    this.setState({
      contratos: response.data
    })
  }



  render(){
    return (
      <SafeAreaView style={style.container}>
        <FlatList
        data={this.state.contratos}
        renderItem={({item}) => <Contratos data={item} />}
        />

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});