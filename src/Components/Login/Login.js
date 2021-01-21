import React, { Component } from 'react'
// import classes from './Login.module.css'
import './Login.css'

// Components
import Username from './Username/Username'
import Password from './Password/Password'


class Login extends Component {

    state = {
        username: '',
        password: null,
        authenticated: false,
        mistake: ''
    }

    loginHandler = () => {
        if(this.state.username === 'alireza' && this.state.password === 1234) {
            this.setState({authenticated: true})
        } else {
            this.setState({mistake: "something went wrong"})
        }
    }

    changeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className='Login'>
                <Username />
                <Password />
                <button onClick={this.loginHandler}>Login</button>
                <p>{this.state.mistake}</p>
            </div>
        )
    }



}

export default Login