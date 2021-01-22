import React, { useContext, useState } from 'react'
import InfoContext from '../../Context/InfoContext'

import classes from './EditInformation.module.css'

import Button from './../UI/Button/Button'

const EditInformation = () => {

    const infoContext = useContext(InfoContext)

    const [message, setMessage] = useState('')
    const [username, setUsername] = useState(infoContext.username)
    const [password, setPassword] = useState(infoContext.password)

    const changeUsername = (e) => {
        setUsername(e.target.value)
        infoContext.changeUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
        infoContext.changePassword(e.target.value)
    }

    const clicked = () => {
        if (username === '' || password === '') {
            setMessage(`username or password can't be empty!`)
        } else {
            infoContext.editInfoHandler()
        }
    }

    return (
        <div className={classes.EditInformation}>
            <input
                type='text'
                value={infoContext.username}
                onChange={(e) => changeUsername(e)} />
            <input
                type='text'
                value={infoContext.password}
                onChange={(e) => changePassword(e)} />
            <Button clicked={clicked} btnType='success'>Edit</Button>
            <p className={classes.invalidInput}>{message}</p>
        </div>
    )
}

export default EditInformation