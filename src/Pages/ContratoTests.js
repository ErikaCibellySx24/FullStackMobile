import React from 'react';
import {
    FlatList,
    useState

} 
from 'react-native';
import api from './src/Services/Api';
import { SafeAreaView } from 'react-native-web';

const ContratosTest = () => {

    return (
        <SafeAreaView style={style.container}>
            <FlatList
            data={this.state.contratos}
            renderItem={({item}) => <contatros />}
            />
        </SafeAreaView>
    )
};

export default ContratosTest;