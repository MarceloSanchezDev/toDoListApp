import { JSX } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Profile(): JSX.Element {


  return (
    <ScrollView style={{backgroundColor: '#2e2a2a' , flex: 1}} >
      <View style={styles.buttonContainer}>
        <Button title="Editar Perfil" onPress={() => {alert('perfil editado')}} />
        <Button title="Cerrar Sesión" onPress={() => {alert('cerrando Sesion')}} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitleStyle}>Perfil de Usuario</Text>
        <Text style={styles.textStyle}>Nombre de Usuario :</Text>
        <Text style={styles.textStyle}>Nombre :</Text>
        <Text style={styles.textStyle}>Correo Electrónico :</Text>
        <Text style={styles.textStyle}>Fecha de Registro :</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar Perfil" onPress={() => {alert('perfil editado')}} />
        <Button title="Cerrar Sesión" onPress={() => {alert('cerrando Sesion')}} />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    height: '100%',

  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
    marginTop: Platform.OS === 'android' ? 24 : 0,
    paddingTop: Platform.OS === 'android' ? 24 : 0,

  },
  textTitleStyle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginVertical: 5,
    fontWeight: 'bold'
  },
  textStyle:{
    fontSize:16,
    color: '#FFFFFF',
    marginVertical: 5,
    fontWeight: 'normal'
  }
});
