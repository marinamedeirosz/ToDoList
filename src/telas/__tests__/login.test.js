const React = require('react');
const { render, fireEvent } = require('@testing-library/react-native');
const Login = require('../Login');

describe('Login', () => {
    test('chama handleSignUp ao pressionar o botão de registro', () => {
        const handleSignUpMock = jest.fn();
        const { getByText } = render(Login({ handleSignUp: handleSignUpMock }));
        const registerButton = getByText('Register');

        fireEvent.press(registerButton);

        expect(handleSignUpMock).toHaveBeenCalledTimes(1);
    });

    test('chama handleLogin corretamente ao pressionar o botão de login', () => {
        const handleLoginMock = jest.fn();
        const { getByText, getByPlaceholderText } = render(Login({ handleLogin: handleLoginMock }));
        const loginButton = getByText('Login');
        const emailInput = getByPlaceholderText('email');
        const passwordInput = getByPlaceholderText('senha');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password');
        fireEvent.press(loginButton);

        expect(handleLoginMock).toHaveBeenCalledTimes(1);
        expect(handleLoginMock).toHaveBeenCalledWith('test@example.com', 'password');
    });
});
