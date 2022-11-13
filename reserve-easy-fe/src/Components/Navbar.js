import React from "react";
import Styles from "./Navbar.css"

const Navbar = () =>{
    return(
        <div className={"top-nav"}>
            <a className={"brand-logo"} href={"#"}>
                <div className={"logo-image"}>
                    <img src={"/logo.png"}/>
                </div>
            </a>
            <a className={"active"} href={"#"}>Anasayfa</a>
            <a href={"#"}>Kategoriler</a>
            <a href={"#"}>En Yüksek Puan Alanlar</a>
            <a href={"#"}>Size Özel</a>
            <div className={"nav-searchbar"}>
                <input type={"text"} placeholder={"Arama"}/>
            </div>
            <div className={"login-nav"}>
                <a href={"#"}>Giriş Yap</a>
            </div>
        </div>
    )
}
export default Navbar

