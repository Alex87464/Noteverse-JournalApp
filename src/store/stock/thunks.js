import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyClothe, savingNewClothe, setActiveClothe, setClothes, setPhotosToActiveNote, setSaving, updateClothe } from "./";
import { loadClothes } from "../../helpers/loadClothes";
import { fileUpload } from "../../helpers/fileUpload";

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

        const clothes = await loadClothes(uid);

        dispatch( setClothes( clothes ) )

    }
}

export const startSaveClothe = ( ) => {
    return async( dispatch, getState ) => { 

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:clothe } = getState().stock;

        const clotheToFireStore = { ...clothe };
        delete clotheToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${uid}/stock/clothes/${ clothe.id }` );
        await setDoc( docRef, clotheToFireStore, {merge: true })

        dispatch( updateClothe( clothe ) );

    }

}


export const startUploadingFiles = ( files = []) => {
    return async(dispatch ) => {
        dispatch( setSaving() );
        
        
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        dispatch( setPhotosToActiveNote( photosUrls ) )

    }
}