import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Main.scss';
import { useGetAllBauturaQuery} from './redux-store/fetch-produse';
import ProductDisplay from './ProductDisplay';
import {Fab} from '@mui/material';
import { IBautura } from './Controllers/BauturaInterface';

function Bauturi() {
  const {data: getAllData, isLoading: isLoadingAll} = useGetAllBauturaQuery();
  const [bautura, setBautura] = useState(Array<IBautura>);
  useEffect(() =>{
    if(isLoadingAll){
        return;
    }
    else if(getAllData){
      setBautura([... getAllData]);
    } else {
      setBautura([]);
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
          {bautura.map((data) => ProductDisplay(data))}

        </div>

      </div></>
  );
}

export default Bauturi;