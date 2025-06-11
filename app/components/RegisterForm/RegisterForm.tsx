import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RegisterForm = () => {
const [name, setName] = useState<string>('');
const [surname, setSurname] = useState<string>('');
const [username, setUsername] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [repeatPassword, setRepeatPassword] = useState<string>('');
const [disableRegister, setDisableRegister] = useState<boolean>(true);

useEffect(() => {
    if(name.length > 0 && surname.length > 0 && username.length > 0 && password.length > 0 && repeatPassword.length > 0) {
        setDisableRegister(false);
    }
    else {
        setDisableRegister(true);
    }
}
, [name, surname, username, password, repeatPassword]);
const handleRegister = () => {
    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Registered with Name: ${name}, Surname: ${surname}, Username: ${username}`);
}
    return (
        <View style={styles.container}>
            <Text style={styles.titleRegister}>Register</Text>
            <Text style={styles.textLabel}>Name:</Text>
            <TextInput style ={styles.input} placeholder={'Name'} placeholderTextColor={'white'}  cursorColor={'red'} textContentType={'name'} onChangeText={setName}/>
            <Text style={styles.textLabel}>Surname:</Text>
            <TextInput style ={styles.input} placeholder={'Surname'} placeholderTextColor={'white'}  cursorColor={'red'} textContentType={'name'} onChangeText={setSurname}/>
            <Text style={styles.textLabel}>Username:</Text>
            <TextInput style ={styles.input} placeholder={'Username'} placeholderTextColor={'white'}  cursorColor={'red'} textContentType={'username'} onChangeText={setUsername}/>
            <Text style={styles.textLabel}>Password:</Text>
            <TextInput style ={styles.input} placeholder={'Password'} placeholderTextColor={'white'}  cursorColor={'red'} textContentType={'password'} secureTextEntry={true} onChangeText={setPassword}/>
            <Text style={styles.textLabel}>Repeat Password:</Text>
            <TextInput style ={styles.input} placeholder={'Repeat Password'} placeholderTextColor={'white'}  cursorColor={'red'} textContentType={'password'} secureTextEntry={true} onChangeText={setRepeatPassword}/>
            <Button title='Register' onPress={handleRegister} disabled={disableRegister}></Button>
        </View>
    );
}

const styles = StyleSheet.create({    
    titleRegister: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderBottomWidth : 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    container: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        borderRadius: 12,
    },
    textLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },})

export default RegisterForm;
