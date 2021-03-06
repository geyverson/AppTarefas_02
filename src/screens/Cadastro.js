import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import Toast from '../components/cpnToast'
import { firebaseAuth } from '../../servicos/config'
import { erroCodigo } from '../../servicos/utils'
import { bold } from 'ansi-colors';

export default class Cadastro extends React.Component {

    state = { email: '', senha: '', errorMessage: null, visible: false }

    novoCadastro = () => {

        // Validando se email e senha não estão em branco
        if(this.state.email.trim() === '' || this.state.senha.trim() === '')
            this.setState({ errorMessage: 'Email ou senha em branco!' },() => this.mostrarToast())
        else {

            // Estamos aqui utilizando o sdk do firebase para a criação de um novo usuário
            // O createUserWithEmailAndPassword já faz todas as validações ao cadastrar um novo usuário
            // bastando apenas que passemos um email e senha
            firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(err => {

                let errorMessage = erroCodigo(err.code)
                if (errorMessage === null)
                    errorMessage = err.message

                this.setState({ errorMessage },() => this.mostrarToast())
            })
        }
    }

    // Ao importar o componente Toast deve-se implementar o mostrarToast e esconderToast
    mostrarToast = () => {
        this.setState({visible: true},() => this.esconderToast())
    }
    
    esconderToast = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <ImageBackground source={require('../images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.container}>
                    <View style={styles.headingSection}>
                        <Image source={require('../images/logo.png')} style={{ width: 150, height: 150 }} />
                    </View>
                    <Text style={styles.heading}>Novo Cadastro</Text>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Senha"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={senha => this.setState({ senha })}
                        value={this.state.senha}
                    />
                    <TouchableOpacity onPress={this.novoCadastro}>
                        <View style={styles.cadBtn}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                    <Button
                        title="Já possui uma conta ? Login "
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                    <View style={styles.boxAviso}>
                        <Text style={styles.signupTitle}>Aplicativo de Exemplo para o trabalho do Professor Carlos Alberto</Text>
                        <Text style={styles.signupDescri}>Aplicativo gerenciador de tarefas utilizando React Native com Firebase. Registro, login e logoff de novos usuários e acesso a recursos nativos como Toast Notification.</Text>            
                    </View>
                    <Toast visible={this.state.visible} mensagem={this.state.errorMessage} />
                </View>
            </ImageBackground>
        )
    }
}

const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        height: heightConst - 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingSection: {
        borderColor: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 35
    },
    heading: {
        color: '#006699',
        fontSize: 36,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        width: '91%',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        backgroundColor: '#fff'
    },
    cadBtn: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    boxAviso:{
        padding: 20
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: '#12799f',
        fontSize: 16,
    },
    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500',
    },
    signupTitle:{
        color: 'black',
        fontWeight: 'bold'
    },
    signupDescri:{
        color: '#000',
        lineHeight: 20
    }
})