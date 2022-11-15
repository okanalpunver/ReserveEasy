import React from "react";
import styles from "./RegisterButton.css"
import {Button} from "react-bootstrap";

const RegisterButton = () =>{
    return(
        <div className={"register-button"}>
            <Button>
            Kayıt Olunuz
            </Button>
        </div>
    )
}
export default RegisterButton