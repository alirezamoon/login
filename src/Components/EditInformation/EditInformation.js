import React, { useContext } from 'react'
import InfoContext from '../../Context/InfoContext'

import classes from './EditInformation.module.css'

import Button from './../UI/Button/Button'

const EditInformation = () => {

    const infoContext = useContext(InfoContext)

    return (
        <div className={classes.EditInformation}>
            <input
                type='text'
                value={infoContext.username}
                onChange={(e) => infoContext.changeUsername(e.target.value)} />
            <input
                type='text'
                value={infoContext.password}
                onChange={(e) => infoContext.changePassword(e.target.value)} />
            <Button clicked={infoContext.editInfoHandler} btnType='success'>Edit</Button>
        </div>
    )
}

export default EditInformation