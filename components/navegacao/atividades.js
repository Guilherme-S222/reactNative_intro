import { View, Text, TouchableOpacity } from 'react-native';

// importa arquivo de estilização
import styles from './exemplosStyles';

// definição das funções dos componentes
function Atividades({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Atividades...
            </Text>
            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Atv1')}>
                <Text style={styles.textoBotao}>
                    Atividade 1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Atv2')}>
                <Text style={styles.textoBotao}>
                Atividade 2
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                 onPress={() => navigation.navigate('Atv3')}>
                <Text style={styles.textoBotao}>
                Atividade 3
                </Text>
            </TouchableOpacity>
        </View>
    );
}
// definição da função padrão que será exportada (nem sempre é necessário)
export default Atividades;