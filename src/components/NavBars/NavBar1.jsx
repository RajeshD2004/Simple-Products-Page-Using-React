import React from "react";
import logo from '../../assets/images/logo.png'
import styles from '../styles/NavBar1.module.css'
import { useNavigate } from "react-router-dom";
function NavBar1(){
    const navigate = useNavigate()
    return(
        <>
        <div className={styles.navcontainer}>
            <div className={styles.navlogo}>
                <img src={logo} alt="img" />
                <h1>Stack</h1>
            </div>
            <div className={styles.navlink}>
                <ul className={styles.navlinkss}>
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li onClick={()=>navigate('/products')}>Product</li>
                    <li onClick={()=>navigate('/aboutPage')}>About</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className={styles.navlogin}>
                <button className={styles.sign}>Sign in</button>
                <button className={styles.register}>Register</button>
            </div>
        </div>
        </>
    )
}

export default NavBar1