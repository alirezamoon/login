import React, {useContext} from 'react'
import AuthContext from './../../Context/AuthContext'


const Logout = () => {

    const authContext = useContext(AuthContext)

    return(
        <div>
            <button onClick={authContext.toggleAuth}>Logout</button>
        </div>
    )
}

export default Logout