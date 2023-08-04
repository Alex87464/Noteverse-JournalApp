import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyClothe, savingNewClothe, setActiveClothe } from "./";

export const startNewClothe = () => {
    return async( dispatch, getState ) => {


        // Todo: tarea dispatch
        dispatch( savingNewClothe() );

        // uid del usuario
        const { uid } = getState().auth;



        const newClothe = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/stock/clothes`) )
        const setDocResp = await setDoc(newDoc, newClothe);

        newClothe.id = newDoc.id;
        
        dispatch( addNewEmptyClothe( newClothe ) );
        dispatch( setActiveClothe( newClothe ) );
        
        // dispatch( newClothe )
        // dispatch( activarClothe )
        
    }
        
}


export const startLoadingClothes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid ) throw new Error('El UID del usuario no existe');

        console.log({uid})

    }
}