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
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Icono de Ventas
import AssignmentIcon from "@mui/icons-material/Assignment"; // Icono de Reportes
import DashboardIcon from "@mui/icons-material/Dashboard"; // Icono de Dashboard
import PeopleIcon from "@mui/icons-material/People"; // Icono de Clientes
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Icono de Cerrar Sesión

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const Navbar = () => {
  const classes = useStyles();



  const handleLogout = () => {
    // Aquí puedes realizar las acciones necesarias para cerrar la sesión del usuario
    console.log("Se ha cerrado la sesión");
  };

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <div className={classes.toolbar} />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItemButton>
      </List>

      <Divider />
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

        <ListItemButton>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Ventas" />
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

      <Divider />
      <List>
        <ListItemButton onClick={handleLogout}> {/*handleLogout*/}
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Navbar;
