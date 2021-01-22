import React, { useContext } from 'react'
import classes from './Password.module.css'


import AuthContext from './../../../Context/AuthContext'
import InputContext from './../../../Context/InputContext'





const Password = () => {


    const authcontext = useContext(AuthContext)
    const inputContext = useContext(InputContext)

    const changeText = (e) => {
        inputContext.changePasswordInput(e.target.value)
    }

    return (
        <div className={classes.Password}>
            {inputContext.passwordInput !== '' ? <span>password</span> : null}
            <input
                type='password'
                onChange={(e) => changeText(e)}
                placeholder='password' />
        </div>
    )
}

export default Password