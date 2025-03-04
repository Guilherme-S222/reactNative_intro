import { View, Text, TouchableOpacity } from 'react-native';

// importa arquivo de estilização
import styles from './exemplosStyles';

// definição das funções dos componentes
function Exemplos({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Exemplos...
            </Text>
            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Ex1')}>
                <Text style={styles.textoBotao}>
                    Exemplo 1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Ex2')}>
                <Text style={styles.textoBotao}>
                    Exemplo 2
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Ex3')}>
                <Text style={styles.textoBotao}>
                    Exemplo 3
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// definição da função padrão que será exportada (nem sempre é necessário)
export default Exemplos;