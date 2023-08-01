
import { makeStyles } from '@mui/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Carrito de compras" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
