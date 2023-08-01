import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const cerrarMensaje = () => {
    console.log('cerrar sesion');
}

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Alex Oliva
          </Typography>
        </Toolbar>
        <Divider />

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
      
      <Divider/>

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

      <List>
        <ListItemButton>
          <ListItemIcon>
          <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={`Bienvenido, Alex`} />
        </ListItemButton>
        <ListItemButton onClick={cerrarMensaje}> {/*handleLogout*/}
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItemButton>
      </List>
      </Drawer>
    </Box>
  );
};
