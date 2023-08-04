import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from "../components"
import { setActiveClothe } from "../../store/stock/stockSlice";
import { startSaveClothe } from "../../store/stock";


export const ClotheView = () => {

    const dispatch = useDispatch();
    const { active:clothe } = useSelector(state => state.stock);

    const { body, title, date, onInputChange, formState } = useForm( clothe );
    
    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date] )
    

    useEffect( ()=> {
        dispatch( setActiveClothe(formState) );

    },[formState])
    
    const onSaveClothe = () => {
        dispatch( startSaveClothe() );
    }

    return (
    <Grid 
        container
        direction="row" 
        alignItems="center" 
        justifyContent="space-between" 
        sx={{ mb: 1 }}
        className="animate__animated animate__fadeIn animate__faster"
    >

        <Grid item>
            <Typography fontSize={ 39 } fontWeight="ligth" >{dateString}</Typography>
        </Grid>

        <Grid item>
            <Button 
                onClick={ onSaveClothe }
                color="primary" 
                sx={{ p: 2 }}
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />
            
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día hoy?"
                minRows={5}
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery/>

    </Grid>
  )
}
