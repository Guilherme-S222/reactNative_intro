import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#de4810', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%'
    }, 
    texto : {
        color: '#fff', 
        fontSize: 30, 
        margin: 10,
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',
    },
    botao : {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        backgroundColor: '#de4810',
        borderRadius: 30,
        width: '40%',
        alignItems: 'center',
        borderColor: 'white',
    }
});

export default styles;