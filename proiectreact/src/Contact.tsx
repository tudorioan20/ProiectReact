
import React from 'react';
import { Typography , Fab, Box } from '@mui/material';
import './Main.scss';
import './Contact.scss';
import poza_locatie from './poza_locatie.PNG';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
function Contact() {

  return (
    <><NavLink className="shoppingcart" to="/shoppingcart">
      <Fab color="default" aria-label="add">
        <ShoppingCartIcon />
      </Fab>
    </NavLink><div className="Contact">

        <Box className="about" sx={{ borderRadius: '20px' }}>
          <h3>Date de contact Trattoria Serventi</h3>
          <p>Restaurantul este deschis pentru mic dejun,  prânz și cină dar oferă și servicii de livrare între orele 10:00 – 23:00. </p>
          <p>Str. Baba Novac nr. 25, sector 3, Bucuresti, langă Parcul I.O.R. </p>
          <h3>Telefon : 0732539540</h3>
          <p>Program Restaurant </p>
          <p>Luni: 10:00 – 23:00</p>
          <p>Marți: 10:00 – 23:00</p>
          <p>Miercuri: 10:00 – 23:00</p>
          <p>Joi: 10:00 – 23:00</p>
          <p>Vineri: 10:00 – 23:00</p>
          <p>Sâmbătă: 10:00 – 23:00</p>
          <p>Duminică: 10:00 – 23:00</p>

        </Box>
        <Box className="locatie" sx={{ borderRadius: '20px' }}>
          <a href="https://www.google.com/maps/place/Trattoria+Monza/@44.4291459,26.1432396,15z/data=!4m5!3m4!1s0x40b1fec8583e53d3:0x5291faaf2c9e7e34!8m2!3d44.4279281!4d26.1537445"><img src={poza_locatie} /></a>
        </Box>
      </div></>
  );
}

export default Contact;