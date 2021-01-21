import classes from './Username.module.css'



const Username = () => {
    return (
        <div className={classes.Username}>
            <p>Username : </p>
            <input type='text' />
        </div>
    )
}

export default Username