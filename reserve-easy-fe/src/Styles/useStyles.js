import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(() => ({
    loginContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    textField: {
        margin: 10,
    },
    submitButton: {
        margin: 3,
        backgroundColor: "#e50914",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#ff0f1f",
        },
    },
    signupContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    switchButton: {
        margin: 3,
        backgroundColor: "#fff",
        color: "#000",
        "&:hover": {
            backgroundColor: "#ebebeb",
        },
    },
}));

export default useStyles;