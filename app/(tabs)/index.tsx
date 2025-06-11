import { JSX, useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm/AuthForm';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';


export default function HomeScreen(): JSX.Element {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showRegister, setRegister] = useState<boolean>(false)

  const handleShowLogin = (): void => {
    setShowLogin(true);
    setRegister(false);
  }
  const handleShowRegister = (): void => {
    setRegister(true);
    setShowLogin(false);
  }

  return (
    <ScrollView style={{backgroundColor: '#2e2a2a' }} contentContainerStyle={styles.contentContainerStyles}>
      {!showLogin && !showRegister && (
        <>
          <View>
            <Text style={styles.textTitleStyle}>Bienvenido a Estadisticas de Baloncesto 🏀⛹️‍♂️</Text>
            <Text style={styles.textStyle}>Esta aplicacion te permite visualizar estadisticas de baloncesto, enfocado en tiros de dos y tres puntos.</Text>
            <Text style={styles.textStyle}>Inicia Sesion o Registrate!</Text>
          </View>
          <View style={styles.buttonsAuthContainer}>
            <AuthForm handleShowLogin = {handleShowLogin} handleShowRegister={handleShowRegister}/>
          </View>
        </>
      )}
      {showLogin && (
        <View>
          <LoginForm ></LoginForm>
          <Button title='Volver' onPress={()=>{
            setShowLogin(false)
            setRegister(false)
            }}></Button>
        </View>
      )}
      {showRegister && (
        <View>
          <RegisterForm></RegisterForm>
          <Button title='Volver' onPress={()=>{
            setShowLogin(false)
            setRegister(false)
            }}></Button>
        </View>
      )}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  contentContainerStyles:{
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: Platform.OS === 'android' ? 24 : 0,
    paddingTop: Platform.OS === 'android' ? 24 : 0,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    
  },
  buttonsAuthContainer:{
    flexDirection: 'row',
    height: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
   textTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonBack :{
    width: 250,
  }

});
