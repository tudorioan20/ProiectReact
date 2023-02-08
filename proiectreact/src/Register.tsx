import { useState } from "react";
import { app, auth } from "./dbconnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router";

import { Box, TextField, IconButton, Button } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./LoginComponents.scss";


const db = getFirestore(app);

function Register(){
    //Initializare campuri
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [telefon, setTelefon] = useState("");
    const [visibility, setVisibility] = useState(false);

    // Erori posibile
    const [emailUsedError, setEmailUsedError] = useState(false);
    const [emailInvalidError, setEmailInvalidError] = useState(false);
    const [passwdError, setPasswdError] = useState(false);

    //Schimbare vizibilitate buton
    const changeVisibility = () => setVisibility(!visibility);
    const navigate = useNavigate();

    const register = async (event: any) => {
        try{
            event.preventDefault();

            createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {

                await setDoc(doc(db, "clienti", res.user.uid), {
                    email: email,
                    nume: nume,
                    prenume: prenume,
                    nr_tel: telefon
                });

                setEmail('');
                setPassword('');
                setNume('');
                setPrenume('');
                setTelefon('');
                navigate('/');
            })
            .catch((error) => {
                if(error.code === "auth/weak-password"){
                    setPasswdError(true);
                } else if(error.code === "auth/email-already-in-use"){
                    setEmailUsedError(true);
                } else if(error.code === "auth/invalid-email"){
                    setEmailInvalidError(true);
                }
                });
        } catch (error: any){
            console.log(error.message);
        }
    }
    

    return(
        <div className = "login">
            
            <label className="reg_title">Create an account</label>
            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <PersonIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    className="scriere"
                    autoComplete = "off"
                    variant = "outlined"
                    placeholder = "Nume"
                    onChange = {(event) => {
                        setNume(event.target.value);
                    }}
                    sx = {{width:"27vw"}}
                    value = {nume}
                />
            </Box>
            
            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <PersonIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    autoComplete = "off"
                    className="scriere"
                    variant = "outlined"
                    placeholder = "Prenume"
                    onChange = {(event) => {
                        setPrenume(event.target.value);
                    }}
                    sx = {{width:"27vw"}}
                    value = {prenume}
                />
            </Box>

            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <AlternateEmailIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    className="scriere"
                    autoComplete = "new-password"
                    variant = "outlined"
                    error = {emailUsedError || emailInvalidError}
                    helperText = {emailUsedError ? "Email deja utilizat" : emailInvalidError ? "Format nevalid de e-mail" : ""}
                    placeholder = "Email"
                    onChange = {(event) => {
                        if(emailUsedError){
                            setEmailUsedError(false);
                        } else if (emailInvalidError){
                            setEmailInvalidError(false);
                        }
                        setEmail(event.target.value);
                    }}
                    sx = {{width:"27vw"}}
                    value = {email}
                />
            </Box>
            
            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <KeyIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    autoComplete = "new-password"
                    variant = "outlined"
                    className="scriere"
                    error = {passwdError}
                    helperText = {passwdError ? "Parola slaba" : ""}
                    type = {visibility ? "text" : "password"}
                    placeholder = "Parola"
                    onChange = {(event) => {
                        if(passwdError){
                            setPasswdError(false);
                        }
                        setPassword(event.target.value);
                    }}
                    sx = {{width:"27vw"}}
                    value = {password}
                />
                <IconButton
                    onClick = { changeVisibility }
                    sx = {{ color: '#E3F6F5', ml: 2, mt: 1 }}
                >
                    {!visibility ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
            </Box>

            

            <Box
                className = "field"
                sx = {{ display: 'flex', alignItems: 'flex-start' }}
            >
                <LocalPhoneIcon sx = {{ color: '#E3F6F5', mr: 2, mt: 2 }} />
                <TextField
                    autoComplete = "off"
                    className="scriere"
                    variant = "outlined"
                    placeholder = "Telefon"
                    onChange = {(event) => {
                        setTelefon(event.target.value);
                    }}
                    sx = {{width:"27vw"}}
                    value = {telefon}
                />
            </Box>
            <Button 
                color="success"
                className = "butonRegister"
                variant = "contained"
                onClick={(event) => {
                    register(event);
                    }}>
                        Register
            </Button>
            
        </div>
    );
}

export default Register;