import React ,{useState , useContext } from 'react'
import classes from './Username.module.css'

import AuthContext from './../../../Context/AuthContext'
import InformationContext from './../../../Context/InformationContext'


const Username = () => {


    const authcontext = useContext(AuthContext)
    const informationContext = useContext(InformationContext)


    const changeText = (e) => {
        informationContext.changeUsername(e.target.value)
    }

    return (
        <div className={classes.Username}>
            <p>Username : </p>
            <input type='text' onChange={(e) => changeText(e)} />
        </div>
    )
}

export default Username