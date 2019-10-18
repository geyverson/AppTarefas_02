import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { firebaseAuth } from '../../servicos/config';

export default class Carregando extends React.Component {

    componentDidMount() {
        // Ao carregar estamos verificado se o usuário já está autenticado
        // Se estiver autenticado direcionamos para Main que é a página principal
        // Caso contrário vai para a página de Login
        firebaseAuth.onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Login')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Carregando ...</Text>
                <Text>Verificando se o usuário ainda tem sessão ativa</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})