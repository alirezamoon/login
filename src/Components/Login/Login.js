import React, { Component } from 'react'
// import classes from './Login.module.css'
import './Login.css'

// Components
import Username from './Username/Username'
import Password from './Password/Password'

// Context
import AuthContext from './../../Context/AuthContext'
import InformationContext from './../../Context/InformationContext'


class Login extends Component {

    state = {
        username: '',
        password: null,
        authenticated: false,
        mistake: ''
    }

    loginHandler = () => {
        if (this.state.username === 'alireza' && this.state.password === 1234) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ mistake: "something went wrong" })
        }
    }

    changeUsername = (text) => {
        this.setState({
            username: text
        })
    }
    changePassword = (text) => {
        this.setState({
            password: text
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler
            }}>
                <InformationContext.Provider value={{
                    username: this.state.username,
                    password: this.state.password,
                    changePassword: this.changePassword,
                    changeUsername: this.changeUsername
                }}>
                    <div className='Login'>
                        <Username />
                        <Password />
                        <button onClick={this.loginHandler}>Login</button>
                        <p>{this.state.mistake}</p>
                    </div>
                </InformationContext.Provider>
            </AuthContext.Provider>
        )
    }



}

export default Login