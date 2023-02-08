
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Main.scss';
import { useGetAllPastaQuery, useGetAllPizzaQuery } from './redux-store/fetch-produse';
import { IPizza } from './Controllers/PizzaInterface';
import ProductDisplay from './ProductDisplay';
import { Box, Fab, Button } from '@mui/material';
import { IPasta } from './Controllers/PastaInterface';

function Paste() {
  const {data: getAllData, isLoading: isLoadingAll} = useGetAllPastaQuery();
  const [pasta, setPasta] = useState(Array<IPasta>);
  useEffect(() =>{
    if(isLoadingAll){
        return;
    }
    else if(getAllData){
      setPasta([... getAllData]);
    } else {
      setPasta([]);
    }
    console.log(".")
}, [isLoadingAll, getAllData]);

  return (
    <><NavLink className="shoppingcart" to="/shoppingcart">
      <Fab color="default" aria-label="add">
        <ShoppingCartIcon />
      </Fab>
    </NavLink><div className="display-produse">


        <div className='contents'>
          {pasta.map((data) => ProductDisplay(data))}

        </div>

      </div></>
  );
}

export default Paste;