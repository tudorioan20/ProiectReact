import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    produse: localStorage.getItem("produse") ? JSON.parse(localStorage.getItem("produse") as any) : [],
    total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total") as any) : 0,
    numarProduse: localStorage.getItem("numarProduse") ? JSON.parse(localStorage.getItem("numarProduse") as any) : 0
};

const cartNotification = createSlice({
    name: "Shopping cart",
    initialState,
    reducers: {
        adaugaProdus(state: any, action){
            const idProdus = state.produse.findIndex(
                (item: any) => item.id === action.payload.id
            );

            state.total += action.payload.pret;

            if (idProdus >= 0){
                state.produse[idProdus].numar += 1;
            } else {
                const produsAux = {...action.payload, numar: 1};
                state.numarProduse += 1;
                state.produse.push(produsAux);
                
            }
            toast.success(`Ai adaugat ${action.payload.nume} in cos!`, { position: "bottom-right" });
            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("numarProduse", JSON.stringify(state.numarProduse));
        },
        stergeProdus(state: any, action){
            const restCartItem = state.produse.filter(
                (item: any) => item.id !== action.payload.id
            );

            state.produse = restCartItem;

            let new_total = 0;
            state.produse.forEach((item: any) => {
                new_total += item.pret * item.numar;
            });

            state.total = new_total;

            state.numarProduse -= 1;

            toast.success(`${action.payload.nume} sters din cos!`, {position: "bottom-right"});

            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("numarProduse", JSON.stringify(state.numarProduse));
        },
        decrementeazaNr(state: any, action){
            const idProdus = state.produse.findIndex(
                (item: any) => item.id === action.payload.id
            );

            if (state.produse[idProdus].numar > 1) {
                state.produse[idProdus].numar -= 1;
                state.total -= state.produse[idProdus].pret;

                toast.success(`Ai scos 1 x ${action.payload.nume} din cos` , {position: "bottom-right"});
            }

            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
        },
        incrementeazaNr(state: any, action){
            const idProdus = state.produse.findIndex(
                (item: any) => item.id === action.payload.id
            );

            state.produse[idProdus].numar += 1;
            state.total += state.produse[idProdus].pret;

            toast.success(`Ai adaugat 1x ${action.payload.nume} in cos`, {position: "bottom-right"});

            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
        },
        stergeCos(state: any){
            state.produse = [];
            state.total = 0;
            state.numarProduse = 0;
            
            toast.success(`Cosul a fost golit!`, {position: "bottom-right"});

            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("numarProduse", JSON.stringify(state.numarProduse));
        },
        reseteazaCos(state: any){
            state.produse = [];
            state.total = 0;
            state.numarProduse = 0;
            
            toast.success(`Comanda a fost plasata!`, {position: "bottom-right"});

            localStorage.setItem("produse", JSON.stringify(state.produse));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("numarProduse", JSON.stringify(state.numarProduse));
        }
    }
});

export const { adaugaProdus, stergeProdus, decrementeazaNr, incrementeazaNr, stergeCos, reseteazaCos } = cartNotification.actions;
export default cartNotification.reducer;