import React from 'react'

const informationContext = React.createContext({
    usename : '',
    password: null,
    changeUsername: () => {},
    changePassword: () => {},
})

export default informationContext