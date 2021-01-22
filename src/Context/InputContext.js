import React from 'react'

const inputContext = React.createContext({
    usernameInput: '',
    passwordInput: '',
    changeUsernameInput: () => { },
    changePasswordInput: () => { },
})

export default inputContext