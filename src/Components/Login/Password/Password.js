import classes from './Password.module.css'


const Password = () => {
    return (
        <div className={classes.Password}>
            <p>Password : </p>
            <input type='password' />
        </div>
    )
}

export default Password