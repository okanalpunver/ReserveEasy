import React from "react";
import Style from "./NavbarBusiness.css"


const NavbarBusiness = () =>{
    return(
        <div className={"top-nav-business"}>
            <a className={"brand-logo-business"} href={"#"}>
                <div className={"logo-image-business"} >
                    <img src={"/logo.png"}/>
                </div>
            </a>
        </div>
    )
}
export default NavbarBusiness