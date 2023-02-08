import { Typography , Fab, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Main() {
  useEffect(() => {
    document.title = 'Serventi';
  }, []);

  return (
    <><NavLink className="shoppingcart" to="/shoppingcart">
      <Fab color="default" aria-label="add">
        <ShoppingCartIcon />
      </Fab>
    </NavLink><div className="Main">
        <link rel="icon" type="image/x-icon" href="./favicon.png"></link>
        <Box className="about" sx={{ borderRadius: '20px' }}>
          <h3>Despre noi</h3>
          <p>Serventi este un restaurant italian situat in inima orasului Bucuresti, care ofera o varietate de preparate delicioase, incluzand pizza si paste. Ambianta restaurantului este calda si primitoare, cu decor traditional italian si iluminat subtil. </p>
          <p>Meniul include o varietate de opțiuni de pizza, cum ar fi Margherita, Pepperoni, si Quattro Formaggi, precum și o selecție de paste, cum ar fi Spaghetti Bolognese, Penne alla Vodka, si Fettuccine Alfredo. Toate ingredientele sunt proaspete si preparate cu grija, iar bucatarii experimentati sunt mandri sa prezinte preparate traditionale italiene. </p>
          <p>Serventi ofera si o selectie de vinuri italiene pentru a completa experienta culinara. Personalul este amabil si serviabil, gata sa ofere recomandari si sa asigure ca fiecare client are o experienta memorabila.</p>
        </Box>


        <div className="produse">

          <NavLink to="/pizza">
            <Box className="pizza" sx={{ borderRadius: '50%' }}>
            </Box>
            <div className="text-produs">
              <p>Pizza</p>
            </div>
          </NavLink>

          <NavLink to="/paste">
            <Box className="paste" sx={{ borderRadius: '50%' }}>
            </Box>
            <div className="text-produs">
              <p>Paste</p>
            </div>
          </NavLink>

          <NavLink to="/bauturi">
            <Box className="bauturi" sx={{ borderRadius: '50%' }}>
            </Box>
            <div className="text-produs">
              <p>Bauturi</p>
            </div>
          </NavLink>
        </div>

        <Box className="suna" sx={{ borderRadius: '30px' }}>
          <h3>Suna la 0732 539 540 pentru a plasa o comanda!</h3>
        </Box>


      </div></>


  );
}

export default Main;
