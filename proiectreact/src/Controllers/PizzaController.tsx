import {app} from "../dbconnection";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { IPizza } from "./PizzaInterface";


const db = getFirestore(app);

const caseCollection = collection(db, "pizza");


export async function getPizza(){
    var pizza: IPizza[] = [];

    const snapshot = await getDocs(caseCollection);
    snapshot.forEach((doc) => {
        var aux = doc.data();

        var obj: IPizza = {
            id: doc.id,
            nume: aux.nume,
            descriere: aux.descriere,
            pret: aux.pret,
            image: aux.image
        }
        pizza.push(obj);
    });

    return pizza;
}

