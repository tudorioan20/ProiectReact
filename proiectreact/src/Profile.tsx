import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app, auth } from './dbconnection';

import './Profile.scss';


const db = getFirestore(app);


function Profile(user: any) {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [nr_tel, setNr_tel] = useState("");
  const [comenzi, setComenzi] = useState([]);

  const id = user.user.uid;

  async function get_detalii_user(){
    const ref = doc(db, "clienti", id);

    await getDoc(ref)
    .then(async (response) => {
        let res = response.data();
        
        if (res){
          setNume(res.nume);
          setPrenume(res.prenume);
          setEmail(res.email);
          setNr_tel(res.nr_tel);
          setComenzi(res.comenzi);
        }
    })
    .catch((e) => console.log(e));
  }

  const handleSubmit = (event: any) => {

    const ref = doc(db, "clienti", id);

    updateDoc(ref, {
      email: email,
      nume: nume,
      prenume: prenume,
      nr_tel: nr_tel,
    });     
    
    event.preventDefault();
    alert(`Detaliile au fost actualizate!`);
  }

  const logout = () => {
    signOut(auth);
  }

  useEffect(() => {
    get_detalii_user();
  }, []);

  return (
    <div className="profile">
      <div className="profile_content">
        <form className='profile_form' onSubmit={handleSubmit}> 
          <div>
              <p className='titlu'>Datele contului</p>
              <p className='raspuns'>Email: {email}</p>

            <Box
                className = "field"
                sx = {{ display: 'flex', width: "fit-content", columnGap: "1.5vw" }}
            >
                <label className='scris'>Nume: </label> 
                <TextField
                    className = "raspuns"
                    variant = "outlined"
                    placeholder = "{nume}"
                    onChange = {(e) => {
                        setNume(e.target.value);
                    }}
                    value = {nume}
                    sx = {{
                      width:"30vw",
                      input: {color: "white"},
                    }}
                />
            </Box>

            <Box
                className = "field"
                sx = {{ display: 'flex', width: "fit-content", columnGap: "1.5vw" }}
            >
                <label className='scris'>Prenume: </label> 
                <TextField
                    className = "raspuns"
                    variant = "outlined"
                    placeholder = {prenume}
                    onChange = {(e) => {
                        setPrenume(e.target.value);
                    }}
                    value = {prenume}
                    sx={{
                      width:"30vw",
                      input: {color: "white"},
                    }}
                />
            </Box>

            <Box
                className = "field"
                sx = {{ display: 'flex', width: "fit-content", columnGap: "1.5vw" }}
            >
                <label className='scris'>Nr. telefon: </label> 
                <TextField
                    className = "raspuns"
                    variant = "outlined"
                    placeholder = {nr_tel}
                    onChange = {(e) => {
                        setNr_tel(e.target.value);
                    }}
                    value = {nr_tel}
                    sx={{
                      width:"30vw",
                      input: {color: "white"}
                    }}
                />
            </Box>

            

          </div>
          <div className='butoane'>
          <Button className='buton_update' variant='contained' type='submit' >Update</Button>
          
          <Link to="/" className = "buton_logout">
          <Button 
            
            variant = "contained"
            color = "error"
            onClick={() => {
                logout();
                }}>
                    Logout
          </Button>
        </Link>
        </div>
        </form>

        
      </div>

      
    </div>
  );
}

export default Profile;