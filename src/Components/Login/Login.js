import React, { Component } from 'react'
// import classes from './Login.module.css'
import './Login.css'

// Components
import Username from './Username/Username'
import Password from './Password/Password'
import Button from './../UI/Button/Button'

// Context
// import AuthContext from './../../Context/AuthContext'
import InputContext from '../../Context/InputContext'


class Login extends Component {

    state = {
        usernameInput: '',
        passwordInput: '',
        mistake: ''
    }


    // static authContext = AuthContext

    loginHandler = () => {
        if (this.state.usernameInput === this.props.username && this.state.passwordInput === this.props.password) {
            this.props.toggleAuth()
        } else {
            this.setState({ mistake: "something went wrong" })
        }
    }

    changeUsernameInput = (text) => {
        this.setState({
            usernameInput: text
        })
    }
    changePasswordInput = (text) => {
        this.setState({
            passwordInput: text
        })
    }

    render() {
        return (
            <InputContext.Provider value={{
                usernameInput: this.state.usernameInput,
                passwordInput: this.state.passwordInput,
                changePasswordInput: this.changePasswordInput,
                changeUsernameInput: this.changeUsernameInput
            }}>
                <div className='Login'>
                    <Username />
                    <Password />
                    <Button clicked={this.loginHandler} btnType='success'>Login</Button>
                    <p>{this.state.mistake}</p>
                </div>
            </InputContext.Provider>
        )
    }



}

export default Login