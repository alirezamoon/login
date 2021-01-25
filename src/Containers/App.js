import React, { Component } from 'react'

import Login from './../Components/Login/Login'
import Logout from './../Components/Logout/Logout'
import EditInformation from '../Components/EditInformation/EditInformation'

import Button from './../Components/UI/Button/Button'

import classes from './App.module.css'

import AuthContext from './../Context/AuthContext'
import InfoContext from './../Context/InfoContext'

class App extends Component {

    state = {
        authenticated: false,
        isEditInfo: false,
        users: [
            {
                id:1,
                username: 'Alireza',
                password: '1234',
            },
            {
                id:2,
                username: 'mamad',
                password: '5678'
            }
        ]
    }

    toggleAuth = () => {
        this.setState({ authenticated: !this.state.authenticated },
            console.log(this.state.authenticated))
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
                    users: this.state.users,
                    changeUsername: this.changeUsername,
                    changePassword: this.changePassword,
                    editInfoHandler: this.editInfoHandler
                }}>
                    <div className={classes.App}>
                        {!this.state.authenticated
                            ? <Login
                                auth={this.state.authenticated}
                                toggleAuth={this.toggleAuth}
                                users={this.state.users} />
                            : this.state.isEditInfo
                                ? <EditInformation />
                                : <div>
                                    <Button clicked={this.editInfoHandler} btnType='warning'>Edit information</Button>
                                    <Logout />
                                </div>}
                    </div>
                </InfoContext.Provider>
            </AuthContext.Provider>
        )
    }
}

export default App