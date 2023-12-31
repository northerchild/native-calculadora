import { SafeAreaView, StatusBar } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor={"#000"}
        barStyle={'light-content'}
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App
