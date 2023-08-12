import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from '../../helpers/loadNotes';

export const startNewClothe = () => {
    return async( dispatch, getState ) => {

        // Todo: tarea dispatch
        dispatch( savingNewNote() );

        // uid del usuario
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/stock/clothes`) )
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
        
    }
        
}


export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);

        dispatch( setNotes( notes ) )

    }
}

export const startSaveNote = ( ) => {
    return async( dispatch, getState ) => { 

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().stock;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${uid}/stock/clothes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, {merge: true })

        dispatch( updateNote( note ) );

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


export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;
        const { active: note } = getState().stock;

        const docRef = doc( FirebaseDB, `${uid}/stock/clothes/${note.id}`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );

    }
}