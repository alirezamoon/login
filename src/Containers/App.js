import React, { Component } from 'react'
import Login from './../Components/Login/Login'
import classes from './App.module.css'

// import AuthContext from './../Context/AuthContext'


class App extends Component {

    state = {
        authenticated: false
    }

    toggleAuth = () => {
        this.setState({ authenticated: !this.state.authenticated })
    }

    render() {
        return (
            // <AuthContext.Provider value={{
            //     authenticated: this.state.authenticated,
            //     toggleAuth: this.toggleAuth
            // }}>
                <div className={classes.App}>
                    {!this.state.authenticated
                        ? <Login auth={this.state.authenticated} toggleAuth={this.toggleAuth} />
                        : null}
                </div>
            // </AuthContext.Provider>
        )
    }
}

export default App