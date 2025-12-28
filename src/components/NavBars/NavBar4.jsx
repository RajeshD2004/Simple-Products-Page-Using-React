import React from "react";
import logo from '../../assets/images/logo.png'
import styles from '../styles/NavBar4.module.css'
import message from '../../assets/images/message.png'
import notify from '../../assets/images/notify.png'
import persons from '../../assets/images/persons.jpg'
import searchIcon from '../../assets/images/search_icon.png'
function NavBar4(){
    return(
        <>
        <div className={styles.navcontainer}>
            <div className={styles.navlogo}>
                <img src={logo} alt="img" />
                <h1>Stack</h1>
            </div>
             <div className={styles.navlink}>
                               <ul className={styles.navlinkss}>
                                   <li>Home</li>
                                   <li>Product</li>
                                   <li>Features</li>
                                   <li>Pricing</li>
                               </ul>
                           </div>
            <div className={styles.search}>
                <img src={searchIcon} alt="img" />
                <input
                type="text"
                placeholder="Search"/>
            </div>
            <div className={styles.navlogin}>
                <img src={message} alt="img" />
                <img src={notify} alt="img" />
                <img src={persons} alt="img" />
            </div>
        </div>
        </>
    )
}

export default NavBar4