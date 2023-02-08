import { IconButton, Tooltip, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { decrementeazaNr, incrementeazaNr, stergeProdus } from './redux-store/cartNotification';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const CartDisplay = (produs: any)  => {
    const dispatch = useDispatch()

    const dispatchStergeProdus = (produs: any) => {
        dispatch(stergeProdus(produs));
    }

    const dispatchDecrementeazaNr = (produs: any) => {
        dispatch(decrementeazaNr(produs));
    }

    const dispatchIncrementeazaNr = (produs: any) => {
        dispatch(incrementeazaNr(produs));
    }

    return (
        <div key={produs.id} className="item">
            <div className="product">
                <img src={produs.image} alt="item img"/>

                <Typography variant="h5" component="h5">
                    {produs.nume}
                </Typography>
            </div>

            <Typography className="price" variant="h5" component="h5">
                {produs.pret}
            </Typography>

            <div className="quantity">
                <Tooltip title="Scade">
                    <span>
                        <IconButton
                            disabled = {produs.numar === 1}
                            onClick = {() => dispatchDecrementeazaNr(produs)}
                            >
                            <RemoveIcon
                                sx={{
                                    color: 'white',
                                    fontSize: "20px"
                                }}
                                />
                        </IconButton>
                    </span>
                </Tooltip>

                <Typography variant="h5" component="h5">
                    {produs.numar}
                </Typography>

                <Tooltip title="Adauga">
                    <IconButton
                        onClick= {() => dispatchIncrementeazaNr(produs)}
                        >
                        <AddIcon
                            sx={{
                                color: 'white',
                                fontSize: "20px"
                            }}
                            />
                    </IconButton>
            </Tooltip>
            </div>

            <Typography className="total" variant="h5" component="h5">
                {Math.round(produs.pret * produs.numar * 100) / 100} lei
            </Typography>

            <Tooltip title="Remove">
                <IconButton
                    onClick= {() => dispatchStergeProdus(produs)}
                    >
                    <HighlightOffIcon
                        sx={{
                            color: 'white',
                            fontSize: "40px"
                        }}
                        />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default CartDisplay