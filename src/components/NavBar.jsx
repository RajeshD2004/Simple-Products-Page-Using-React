import NavBar1 from "./NavBars/NavBar1"
import NavBar2 from "./NavBars/NavBar2"
import NavBar3 from "./NavBars/NavBar3"
import NavBar4 from "./NavBars/NavBar4"
import NavBar5 from "./NavBars/NavBar5"
import NavBar6 from "./NavBars/NavBar6"
import styles from './styles/NavBarMain.module.css'


function NavBar() {

  return (
    <div className={styles.navmain}>
    <NavBar1/>
    <NavBar2/>
    <NavBar3/>
    <NavBar4/>
    <NavBar5/>
    <NavBar6/>
    </div>
  )
}

export default NavBar
