
import { ToastAndroid } from 'react-native';

// Componente que usa um recurso nativo o ToastAndroid API
// Este é um componente funcional state-less (sem estado)
// Quando importar este componente deve-se implementar o método esconder e mostrar
// Utilize as props mensagem e visible para interação com o Toast
export default Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.mensagem,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
      return null
    }
    return null
}