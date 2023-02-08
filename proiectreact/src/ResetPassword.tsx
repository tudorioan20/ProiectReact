import { Box, TextField, Button } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './dbconnection';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import "./LoginComponents.scss";


function ResetPassword(){
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const sendPasswordReset = async (event: any) => {
        try {
            event.preventDefault();

            await sendPasswordResetEmail(auth, email);
            
            setEmail('');

            alert("Password reset link sent!");
        } catch (error: any) {
            if(error.code === "auth/invalid-email"){
                setEmailError(true);
            } else if (error.code === "auth/user-not-found"){
                setEmailError(true);
            }
        }
    };

    return(
        <div className = "reset">

            <label className='reset_title'>Forgot your password?</label>

            <Box
                className = "login"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <AlternateEmailIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    variant = "outlined"
                    className="scriere"
                    error = {emailError}
                    helperText = {emailError ? "Email inexistent" : ""}
                    placeholder = "Email"
                    onChange = {(event) => {
                        if(emailError){
                            setEmailError(false);
                        }
                        setEmail(event.target.value);
                    }}
                    value = {email}
                />
            </Box>

            <Button 
                color="success"
                className = "butonReset"
                variant = "contained"

                onClick={(event) => {
                    sendPasswordReset(event);
                    }}>
                        reset
            </Button>
        </div>
    );
}

export default ResetPassword;