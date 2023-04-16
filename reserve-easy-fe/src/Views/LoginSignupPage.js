import { useState } from "react";
import { Button } from "@mui/material";
import useStyles from "../Styles/useStyles";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const LoginSignupPage = () => {
    const classes = useStyles();
    const [showSignup, setShowSignup] = useState(false);

    const handleSwitch = () => setShowSignup(!showSignup);

    return (
        <div className={showSignup ? classes.signupContainer : classes.loginContainer}>
            {showSignup ? <SignupPage /> : <LoginPage />}
            <Button
                className={classes.switchButton}
                onClick={handleSwitch}
                fullWidth
            >
                {showSignup
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign up"}
            </Button>
        </div>
    );
};

export default LoginSignupPage;