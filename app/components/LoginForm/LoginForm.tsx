import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [disableLogin, setDisableLogin] = useState<boolean>(true);

    useEffect(() => {
        if(username.length > 0 && password.length > 0) {
            setDisableLogin(false);
        }else {
            setDisableLogin(true);
        }
    }, [username, password]);

    const handleLogin = () => {
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleLogin}>Login</Text>
            <Text style={styles.textLabel}>Username:</Text>
            <TextInput placeholder={'Username'} placeholderTextColor={'white'} cursorColor ={'red'} textContentType={'username'}
              style ={styles.input} onChangeText={setUsername}></TextInput>
            <Text style={styles.textLabel}>Password:</Text>
            <TextInput placeholder={'Password'} placeholderTextColor={'white'}  cursorColor ={'red'} secureTextEntry={true}
              style ={styles.input} onChangeText={setPassword}></TextInput>
            <Button title='Login' onPress={handleLogin} disabled={disableLogin}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    titleLogin: {
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
        color: 'white',
    },
    container: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        borderRadius: 10,
    },
    textLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
})

export default LoginForm;
