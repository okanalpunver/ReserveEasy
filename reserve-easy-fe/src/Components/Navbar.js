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
            <input type={"text"} placeholder={"Arama"}/>
            <div className={"login-nav"}>
                <a href={"#"}>Giriş Yap</a>
            </div>
        </div>
    )
}
export default Navbar

