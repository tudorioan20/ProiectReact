import {app} from "../dbconnection";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { IPasta } from "./PastaInterface";


const db = getFirestore(app);

const caseCollection = collection(db, "paste");


export async function getPasta(){
    var pasta: IPasta[] = [];

    const snapshot = await getDocs(caseCollection);
    snapshot.forEach((doc) => {
        var aux = doc.data();

        var obj: IPasta = {
            id: doc.id,
            nume: aux.nume,
            descriere: aux.descriere,
            pret: aux.pret,
            image: aux.image
        }
        pasta.push(obj);
    });

    return pasta;
}

