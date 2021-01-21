import React, { Component } from 'react'

import Login from './../Components/Login/Login'
import Logout from './../Components/Logout/Logout'
import EditInformation from '../Components/EditInformation/EditInformation'

import classes from './App.module.css'

import AuthContext from './../Context/AuthContext'
import InfoContext from './../Context/InfoContext'

class App extends Component {

    state = {
        authenticated: false,
        username: 'Alireza',
        password: '1234',
        isEditInfo: false
    }

    toggleAuth = () => {
        this.setState({ authenticated: !this.state.authenticated })
    }

    changeUsername = (text) => {
        this.setState({ username: text })
    }
    changePassword = (text) => {
        this.setState({ password: text })
    }

    editInfoHandler = () => {
        this.setState({ isEditInfo: !this.state.isEditInfo })
    }


    render() {
        return (
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                toggleAuth: this.toggleAuth
            }}>
                <InfoContext.Provider value={{
                    username: this.state.username,
                    password: this.state.password,
                    changeUsername: this.changeUsername,
                    changePassword: this.changePassword,
                    editInfoHandler: this.editInfoHandler
                }}>
                    <div className={classes.App}>
                        {!this.state.authenticated
                            ? <Login
                                auth={this.state.authenticated}
                                toggleAuth={this.toggleAuth}
                                username={this.state.username}
                                password={this.state.password} />
                            : this.state.isEditInfo
                                ? <EditInformation />
                                : <div>
                                    <button onClick={this.editInfoHandler}>Edit information</button>
                                    <Logout />
                                </div>}
                    </div>
                </InfoContext.Provider>
            </AuthContext.Provider>
        )
    }
}

export default App