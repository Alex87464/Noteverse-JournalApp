import { IconButton } from '@mui/material';
import { AddOutlined } from "@mui/icons-material";

import { StockLayout } from "../layout/StockLayout";
import { NoteView, NothingSelectedView } from "../views";
import { useDispatch, useSelector } from 'react-redux';
import { startNewClothe } from '../../store/stock/thunks';

export const StockPage = () => {

  const dispatch = useDispatch();
  const { isSaving } = useSelector( state => state.stock);

  const onClickNewClothe = () => {
    dispatch( startNewClothe() );
  }

  return (
    <StockLayout>


      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corporis voluptatibus nemo officiis numquam exercitationem repudiandae eveniet consequuntur. In, inventore laboriosam fugiat odio recusandae aliquid officiis rerum iste atque alias.</Typography> */}
      {/* Nothing selected */}
      <NothingSelectedView/>
      {/* <NoteView/> */}
      
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
