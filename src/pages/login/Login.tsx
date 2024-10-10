import styles from '../../styles/login/Login.module.css';
import Banner from '../../assets/Banner.svg';
import {Input} from "../../components/Input.tsx";


function Main() {

    return (
        <div className={styles.body}>

            <div className={styles.banner}>

                <img src={Banner} alt="banner with a balon"/>
            </div>

            <form action="" method="get" className={styles.form}>

                <h2 className={styles.title}>Create your Free Account</h2>

                <div className={styles.inputContainer}>

                    <div>
                        <label htmlFor="email">Email</label>

                        <Input type="email" placeholder="Enter your Email here" id="email"/>
                    </div>

                    <div>

                        <label htmlFor="email">Password</label>
                        <Input type="password" placeholder="Enter your Password here" id="password"/>
                    </div>

                    <Input type="submit" value="Submit" placeholder="" id=" "/>
                </div>
            </form>
        </div>
    )
}

export default Main;