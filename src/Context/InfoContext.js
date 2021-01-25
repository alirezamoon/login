import React from 'react'


const InfoContext = React.createContext({
    users: [],
    changeUsername: () => {},
    changePassword: () => {},
    editInfoHandler: () => {},
})

export default InfoContext