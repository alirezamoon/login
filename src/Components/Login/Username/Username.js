import React ,{useState , useContext } from 'react'
import classes from './Username.module.css'

import AuthContext from './../../../Context/AuthContext'
import InputContext from '../../../Context/InputContext'


const Username = () => {


    const authcontext = useContext(AuthContext)
    const inputContext = useContext(InputContext)


    const changeText = (e) => {
        inputContext.changeUsername(e.target.value)
    }

    return (
        <div className={classes.Username}>
            <p>Username : </p>
            <input type='text' onChange={(e) => changeText(e)} />
        </div>
    )
}

export default Username