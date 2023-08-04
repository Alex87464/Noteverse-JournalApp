import { IconButton } from '@mui/material';
import { AddOutlined } from "@mui/icons-material";

import { StockLayout } from "../layout/StockLayout";
import { ClotheView, NothingSelectedView } from "../views";
import { useDispatch, useSelector } from 'react-redux';
import { startNewClothe } from '../../store/stock/thunks';

export const StockPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.stock);

  const onClickNewClothe = () => {
    dispatch( startNewClothe() );
  }

  return (
    <StockLayout>


    
    {/* Si hay una nota activa mostrar el NoteView 
      caso contrario mostra NothingSelectedView*/}
      {/* Nothing selected */}
      
      {
        (!!active)
          ? <ClotheView/>
          : <NothingSelectedView/>
      }

      
      
      
      <IconButton
      onClick={onClickNewClothe}
      disabled={ isSaving }
        size="large"
        sx={{
          color: "white",
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}} />
      </IconButton>

    </StockLayout>
  );
};
