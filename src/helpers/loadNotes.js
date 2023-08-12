import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async(uid= '') => {
    if (!uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB,`${uid}/stock/clothes` )
    const docs = await getDocs(collectionRef);

    const clothes = [];
    docs.forEach( doc =>{
        clothes.push({ id: doc.id, ...doc.data() })
    } )


    return clothes;
     
}
