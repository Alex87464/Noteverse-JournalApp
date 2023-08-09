
import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        isSaving: false,
        messageSaved: '',
        clothes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg...
        // }
        
    },
    reducers: {
        savingNewClothe: ( state ) => { 
            state.isSaving = true;
        },
        addNewEmptyClothe: (state, action ) => {
            state.clothes.push( action.payload )
            state.isSaving = false;
        },
        setActiveClothe: (state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setClothes: (state, action) => {
            state.clothes = action.payload;
        },
        setSaving: (state ) =>{
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateClothe: (state, action) => { // payload: note
            state.isSaving = false; 
            state.clothes = state.clothes.map( clothe => {

                if ( clothe.id === action.payload.id ) {
                    return action.payload;
                }
                return clothe;
            });
            // Todo: Mostrar msje de actualizacion
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearClothesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.clothes = [];
            state.active = null;
        },

        deleteClotheById: (state, action) => {
            state.active = null;
            state.clothes = state.clothes.filter( clothe => clothe.id !== action.payload );
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyClothe,
    clearClothesLogout,
    deleteClotheById,
    savingNewClothe,
    setActiveClothe,
    setClothes,
    setPhotosToActiveNote,
    setSaving,
    updateClothe,
} = stockSlice.actions;