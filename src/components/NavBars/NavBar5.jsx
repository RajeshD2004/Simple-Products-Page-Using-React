import React from "react";
import logo from '../../assets/images/logo.png'
import styles from '../styles/NavBar5.module.css'
import message from '../../assets/images/message.png'
import notify from '../../assets/images/notify.png'
import persons from '../../assets/images/persons.jpg'
import searchIcon from '../../assets/images/search_icon.png'
function NavBar5(){
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
                <img src={persons} alt="img" />
                <select name="Name" id="dropdwon">
                    <option value="Name">Rajesh</option>
                    <option value="Name">Sam</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default NavBar5