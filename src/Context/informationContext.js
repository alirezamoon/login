import React from 'react'

const informationContext = React.createContext({
    username : '',
    password: '',
    changeUsername: () => {},
    changePassword: () => {},
})

export default informationContext