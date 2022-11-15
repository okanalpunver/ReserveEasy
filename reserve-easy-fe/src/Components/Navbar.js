import React from "react";
import Styles from "./Navbar.css"

const Navbar = () =>{
    return(
        <div className={"top-nav"}>
            <div className="navbar">
                <div className="logo">
                    <a className={"brand-logo"} href={"#"}>
                        <div className={"logo-image"}>
                            <img src={"/logo.png"}/>
                        </div>
                    </a>
                </div>
                <div className="search">
                    <div className={"nav-searchbar"}>
                        <input className="search-bar" type={"text"} placeholder={"Arama"}/>
                    </div>
                    <div className="nav-menu">
                    <a className={"active"} href={"#"}>Anasayfa</a>
                    <a href={"#"}>Kategoriler</a>
                    <a href={"#"}>En Yüksek Puan Alanlar</a>
                    <a href={"#"}>Size Özel</a>
                    </div>
                </div>
                <div className={"login-nav"}>
                     <a href={"#"}>Giriş Yap</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar

