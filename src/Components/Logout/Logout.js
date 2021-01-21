import React, {useContext} from 'react'
import AuthContext from './../../Context/AuthContext'

import Button from './../UI/Button/Button'

const Logout = () => {

    const authContext = useContext(AuthContext)

    return(
        <div>
            <Button clicked={authContext.toggleAuth} btnType='danger'>Logout</Button>
        </div>
    )
}

export default Logout