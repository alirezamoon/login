import React from 'react'

const inputContext = React.createContext({
    username : '',
    password: '',
    changeUsername: () => {},
    changePassword: () => {},
})

export default inputContext