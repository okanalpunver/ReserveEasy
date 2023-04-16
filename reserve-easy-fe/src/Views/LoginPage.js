import  { useState } from "react";
import { TextField, Button } from "@mui/material";
import useStyles from "../Styles/useStyles";

const LoginPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault();
        // code to handle login
    };

    return (
        <div className={classes.loginContainer}>
            <h2>Login</h2>
            <form className={classes.form} onSubmit={handleLogin}>
                <TextField
                    className={classes.textField}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    className={classes.textField}
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    className={classes.submitButton}
                    type="submit"
                    variant="contained"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;