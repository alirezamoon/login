import React, { useContext } from 'react'
import InfoContext from '../../Context/InfoContext'


const ChangeInfo = () => {

    const infoContext = useContext(InfoContext)

    return (
        <div>
            <input
                type='text'
                value={infoContext.username}
                onChange={(e) => infoContext.changeUsername(e.target.value)} />
            <input
                type='text'
                value={infoContext.password}
                onChange={(e) => infoContext.changePassword(e.target.value)} />
            <button onClick={infoContext.editInfoHandler}>Edit</button>
        </div>
    )
}

export default ChangeInfo