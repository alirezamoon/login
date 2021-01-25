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
        mistake: '',
        authenticatedss: false
    }


    // static authContext = AuthContext
    comon = () => {
        let auth = false
        let auth2 = false
        this.props.users.map(user => {
            auth = user.username === this.state.usernameInput && user.password === this.state.passwordInput
            // console.log(user)
            // console.log(user.username)
            // console.log(this.state.usernameInput)
            // console.log(user.password)
            // console.log(this.state.passwordInput)
            // console.log(this)
            if (auth) {
                auth2 = true
            }
        })
        // console.log(this.setState)
        // this.setState({authenticatedss: auth2})
        this.setState({ authenticatedss: true }, function () {
            console.log(this.state.authenticatedss);
          });
        this.loginHandler()
    }

    loginHandler = () => {
        if (this.state.authenticatedss) {
            this.props.toggleAuth()
        } else {
            this.setState({ mistake: "username or password was incorrect !" })
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
                    <Button clicked={this.comon} btnType='success'>Login</Button>
                    <p className='mistake'>{this.state.mistake}</p>
                </div>
            </InputContext.Provider>
        )
    }



}

export default Login