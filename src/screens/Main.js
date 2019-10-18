import React from 'react'
import { Alert, Platform, Image, ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { firebaseAuth } from '../../servicos/config';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usuarioAtual: null, errorMessage: null }
    }

    componentDidMount() {
        const { currentUser } = firebaseAuth;
        this.setState({ usuarioAtual: currentUser })
    }

    onPressButton = () => {
        // Finalizando a sessão do usuário no Firebase e redirecionando o para a página de Login
        firebaseAuth.signOut().then(() => this.props.navigation.navigate('Login'))
    }

    render() {
        const { usuarioAtual } = this.state
        return (
            <ScrollView>
                <View style={{padding: 20}}>
                    <Text>
                        Olá {usuarioAtual && usuarioAtual.email}!
                    </Text>
                    <Text>
                        Dados de Sessão do Usuário.
                    </Text>
                    <Text>
                        {JSON.stringify(firebaseAuth,null,4)}
                    </Text>
                    <View>
                        <Button
                            onPress={this.onPressButton}
                            title="Finalizar Sessão."
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})