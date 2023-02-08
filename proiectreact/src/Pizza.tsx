
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Main.scss';
import { useGetAllPizzaQuery } from './redux-store/fetch-produse';
import { IPizza } from './Controllers/PizzaInterface';
import ProductDisplay from './ProductDisplay';
import { Box, Fab, Button } from '@mui/material';

function Pizza() {
  const {data: getAllData, isLoading: isLoadingAll} = useGetAllPizzaQuery();
  const [pizza, setPizza] = useState(Array<IPizza>);
  useEffect(() =>{
    if(isLoadingAll){
        return;
    }
    else if(getAllData){
      setPizza([... getAllData]);
    } else {
      setPizza([]);
    }
    console.log(".")
}, [isLoadingAll, getAllData]);

  return (
    
    <><NavLink className="shoppingcart" to="/shoppingcart">
      <Fab color="default" aria-label="add">
        <ShoppingCartIcon />
      </Fab>
    </NavLink>
    <div className="display-produse">


        <div className='contents'>
          {pizza.map((data) => ProductDisplay(data))}

        </div>

      </div></>
  );
}

export default Pizza;