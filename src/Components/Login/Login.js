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
        username: '',
        password: '',
        mistake: ''
    }


    // static authContext = AuthContext

    loginHandler = () => {
        if (this.state.username === this.props.username && this.state.password === this.props.password) {
            this.props.toggleAuth()
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
            <InputContext.Provider value={{
                username: this.state.username,
                password: this.state.password,
                changePassword: this.changePassword,
                changeUsername: this.changeUsername
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