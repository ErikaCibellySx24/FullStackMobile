import { View, Text, Image, StyleSheet  } from 'react-native';

export default class Contratos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nomeContrato}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nomeContrato: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})