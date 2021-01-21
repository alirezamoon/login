import React from 'react'


const InfoContext = React.createContext({
    username: '',
    password: '',
    changeUsername: () => {},
    changePassword: () => {},
    editInfoHandler: () => {},
})

export default InfoContext