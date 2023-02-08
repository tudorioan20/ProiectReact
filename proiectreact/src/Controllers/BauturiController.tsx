import {app} from "../dbconnection";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { IBautura } from "./BauturaInterface";


const db = getFirestore(app);

const caseCollection = collection(db, "bauturi");


export async function getBautura(){
    var bautura: IBautura[] = [];

    const snapshot = await getDocs(caseCollection);
    snapshot.forEach((doc) => {
        var aux = doc.data();

        var obj: IBautura = {
            id: doc.id,
            nume: aux.nume,
            descriere: aux.descriere,
            pret: aux.pret,
            image: aux.image
        }
        bautura.push(obj);
    });

    return bautura;
}

