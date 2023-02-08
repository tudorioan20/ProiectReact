import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CartDisplay from './CartDisplay';
import { stergeCos, reseteazaCos} from './redux-store/cartNotification';
import { usePost_cartMutation } from './redux-store/cartReducers';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "./ShoppingCart.scss"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./dbconnection";

function ShoppingCart() {
  const [user, loading] = useAuthState(auth);
  
    useEffect(() => {
        if (loading){
            return;
        }
    }, [loading, user]);


  const [post_cart] = usePost_cartMutation();
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const dispatchStergeCos = () => {
    dispatch(stergeCos());
  }

  const handleOrder = async() => {
    if(user){
      const cart_data = {
        produse: cart.produse.map((data: any) => data.nume),
        cantitate: cart.produse.map((data: any) => data.numar),
        pret: cart.produse.map((data: any) => data.pret),
        total: Math.round(cart.total * 100) / 100,
        data: new Date().toISOString(),
        user: user.uid
      }

      await post_cart(cart_data)
            .then(() => dispatch(reseteazaCos()));
    } else {
        toast.error(`Logheaza-te pentru a putea plasa comanda!`, {position: "bottom-left"});
      }
    }
  


  return (
    <div className="shoppingCart">
      <header className="header">
        <Typography variant="h3" component="h3">
          Cosul meu
        </Typography>
      </header>

      {
        cart.produse.length !== 0
          ?
            <div className='text'>
              <div className='titlu'>
                <Typography className="product" variant="h4" component="h4">
                  Produs
                </Typography>
                <Typography className="price" variant="h4" component="h4">
                  Pret
                </Typography>
                <Typography className="quantity" variant="h4" component="h4">
                  Numar
                </Typography>
                <Typography className="total" variant="h4" component="h4">
                  Total
                </Typography>
              </div>

              {cart.produse.map((item: any) => CartDisplay(item))}

              <div className="summary">
                <div>
                    <Button
                      className = 'sterge-produs'
                      onClick = {() => dispatchStergeCos()}
                      >
                        Sterge comanda
                    </Button>
                </div>

                <div className="checkout">
                  <Typography className="total_cart" variant="h4" component="h4">
                    Total: {Math.round(cart.total * 100) / 100} lei
                  </Typography>

                  <div>
                    <Button
                      className = 'trimite-comanda'
                      onClick = {async() => handleOrder()}
                      >
                        Trimite comanda
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          :
            <Typography className='goleste-cos' variant="h2" component="h2">
              Nu ai nimic in cos!
            </Typography>
      }
    </div>
  );
}

export default ShoppingCart;