import React, { Fragment } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Carregando from './src/screens/Carregando';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Main from './src/screens/Main';

// O createSwitchNavigator funciona como um seletor de Rotas
// poderíamos usar aqui um StackNavigator, mas pela simplicidade do projeto
// optamos por usar o createSwitchNavigator
// Documentação do React Navigation -> https://reactnavigation.org/
const SwitchNavigator = createSwitchNavigator(
  {
    Carregando: Carregando,
    Cadastro: Cadastro,
    Login: Login,
    Main: Main
  },
  {
    initialRouteName: 'Carregando',
    headerMode: 'none'
  }
)
// No React Navigation é obrigatório o createAppContainer
const App = createAppContainer(SwitchNavigator);
export default App
