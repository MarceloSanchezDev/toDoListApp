import React, { JSX } from 'react';
import Button from '../Button/Button';

type AuthFormProps = {
        handleShowLogin?: () => void;
        handleShowRegister?: () => void;
}

export default function AuthForm ({handleShowLogin,handleShowRegister}: AuthFormProps): JSX.Element {
    return (
        <>
            <Button title='Login 🏀' onPress={handleShowLogin}></Button>
            <Button title='Register ⛹️‍♂️' onPress={handleShowRegister}></Button>
        </>
    );
}

