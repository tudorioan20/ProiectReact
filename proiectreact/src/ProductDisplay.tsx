import { Button,Box} from '@mui/material';
import { useDispatch } from 'react-redux';
import { adaugaProdus } from './redux-store/cartNotification';
const ProductDisplay = (product:any) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: any) => {
        dispatch(adaugaProdus(product));
    }
    return (
    <div>
    <Box className="produs" sx={{borderRadius: '50%'}}>
        <img src={product.image}/>
        <div className="text-produs">
            <p>{product.nume}</p>
            <p>{product.descriere}</p>
            
        </div>
        <p>{product.pret} lei</p>
        <Button
                color="success"
                className = "butondisplayproduse"
                variant = "contained"
                onClick = {() => handleAddToCart(product)}>
                        Adauga in cos
            </Button>
    </Box >
    </div>)
}
export default ProductDisplay;