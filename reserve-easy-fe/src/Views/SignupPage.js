import { useState } from "react";
import { TextField, Button } from "@mui/material";
import useStyles from "../Styles/useStyles";

const SignupPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = (e) => {
        e.preventDefault();
        // code to handle signup
    };

    return (
        <div className={classes.signupContainer}>
            <h2>Sign up</h2>
            <form className={classes.form} onSubmit={handleSignup}>
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
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export default SignupPage;