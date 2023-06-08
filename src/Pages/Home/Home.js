import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text, 
  StyleSheet
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Home = () => (
  <SafeAreaView style={styles.container}>
    <View>
        <Text style={styles.title} Title="Bem vindo(a)!" />
    </View>
    <Separator />
    <View>
      <Button
        title="CONTRATOS"
        color="#467857"
      />
    </View>
    <Separator />
    <View>
      <Button
        title="PLANILHA NF"
        color="#467857"

      />
    </View>
    <Separator />
    <View>
      <Button
        title="NOTAS FISCAIS"
        color="#467857"
      />
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Home;
