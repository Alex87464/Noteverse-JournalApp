import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', placeItems: 'center', gap: 1 }}>
            <Avatar alt={displayName} src={photoURL} />
            <Typography variant='h6' noWrap component='div'>
              {displayName}
            </Typography>
          </Box>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
