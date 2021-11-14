import styles from './Button.module.css'

const Button = ({title,cl}) => {
    return(
        <div>
            <button className={styles +" "+ cl}>{title}</button>
        </div>
    )
}


export default Button;