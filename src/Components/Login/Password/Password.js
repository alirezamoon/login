import React, {useContext} from 'react'
import classes from './Password.module.css'


import AuthContext from './../../../Context/AuthContext'
import InformationContext from './../../../Context/InformationContext'





const Password = () => {
    
    
    const authcontext = useContext(AuthContext)
    const informationContext = useContext(InformationContext)
    
    const changeText = (e) => { 
        informationContext.changePassword(e.target.value)
    }
    
    return (
        <div className={classes.Password}>
            <p>Password : </p>
            <input type='password' onChange={(e) => changeText(e)} />
        </div>
    )
}

export default Password