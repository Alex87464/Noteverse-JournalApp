
import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        isSaving: true,
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
        addNewClothe: (state, action ) => {

        },
        setActiveClothe: (state, action ) => {

        },
        setClothes: (state, action) => {

        },
        setSaving: (state ) =>{

        },
        updateClothe: (state, action) => {

        },
        deleteClotheById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewClothe,
    setActiveClothe,
    setClothes,
    setSaving,
    updateClothe,
    deleteClotheById
} = stockSlice.actions;