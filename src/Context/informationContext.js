import React from 'react'

const informationContext = React.createContext({
    username : '',
    password: null,
    changeUsername: () => {},
    changePassword: () => {},
})

export default informationContext