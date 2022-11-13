import React from "react";
import Styles from "./Navbar.css"


const Navbar = () =>{
    return(
        <div className={"top-nav"}>
            <a className={"active"} href={"#"}>Anasayfa</a>
            <a href={"#"}>Randevular</a>
            <a href={"#"}>Arama</a>
        </div>
    )
}
export default Navbar

