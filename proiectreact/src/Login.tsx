import { Box, IconButton, TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./dbconnection";
import { useNavigate } from "react-router";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import "./LoginComponents.scss";


function Login(){
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwdError, setPasswdError] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    const login = async (event: any) => {
        try{
            event.preventDefault();

            setEmailError(false);
            setPasswdError(false);

            await signInWithEmailAndPassword(auth, email, passwd);
            
            setEmail('');
            setPasswd('');

            navigate('/profile');
        } catch (error: any){
            if(error.code === "auth/invalid-email"){
                setEmailError(true);
            }
            else if (error.code === "auth/wrong-password"){
                setPasswdError(true);
            } else if(error.code === "auth/user-not-found"){
                setEmailError(true);
                setPasswdError(true);
            }
        }
    }
    

    return(
        <div className = "login">

            <label className="login_title">Login into your account</label>
            
            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <AlternateEmailIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />

                <TextField
                    className="scriere"
                    variant = "outlined"
                    error = {emailError}
                    helperText = {emailError ? passwdError ? "Userul nu exista" : "Email incorect" : ""}
                    placeholder = "Email"
                    onChange = {(event) => {
                        if(emailError){
                            setEmailError(false);
                        }
                        setEmail(event.target.value);
                    }}
                    sx = {{width:"30vw"}}
                    value = {email}
                />
                
            </Box>
            
            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <KeyIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    variant = "outlined"
                    className="scriere"
                    error = {passwdError}
                    helperText = {passwdError ? emailError ? "Userul nu exista" : "Parola incorecta" : ""}
                    type = {showPassword ? "text" : "password"}
                    placeholder = "Parola"
                    onChange = {(event) => {
                        if(passwdError){
                            setPasswdError(false);
                        }
                        setPasswd(event.target.value);
                    }}
                    sx = {{width:"30vw"}}
                    value = {passwd}
                />
                <IconButton
                    onClick = { handleShowPassword }
                    sx = {{ color: '#E3F6F5', ml: 2, mt: 1 }}
                >
                    {!showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
            </Box>

            <Button
                color="success"
                className = "butonLogin"
                variant = "contained"
                onClick = {(event) => {
                    login(event);
                    }}>
                        Login
            </Button>
        
        </div>
        
    );
}

export default Login;