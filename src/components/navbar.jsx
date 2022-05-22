import React from "react";
import styles from '../components/style.module.css'

function Navbar(){
    return (
    <div>
        <h3>LOGOBAKERY</h3>
    </div>
    )
}
function Navbar1(){
    return (
    <div className={styles.Navbar1}>
        <div> <p>Services</p> </div>
        <div><p>Projects</p></div>
        <div> <p>About</p></div>
    </div>
    )
}
function Navbar3(){
    return(
        <div id="div">
        <button className={styles.button}>contact</button>
    </div>
    )
}
export {Navbar,Navbar1,Navbar3}