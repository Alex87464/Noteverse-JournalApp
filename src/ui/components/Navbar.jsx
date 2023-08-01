import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart"; // Importa el icono de análisis de ventas
import SearchIcon from "@mui/icons-material/Search"; // Importa el icono de búsqueda de producto

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
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Análisis de Ventas" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Buscar Producto" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Carrito de compras" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Inventario" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Órdenes de Compra" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Navbar;