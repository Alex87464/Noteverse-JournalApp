import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

export const LoginPage = () => {
  
  const { status, errorMessage } = useSelector( state => state.auth )
  
  const dispatch = useDispatch();
  const { email, password, onInputChange} = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({email, password})

    // !! No es esta la accion a despachar
    dispatch( startLoginWithEmailPassword({ email, password}) )
  }

  const onGoogleSubmit = () => {
    console.log('Sign de google');

    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        {/* Textfields section */}
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          {/* BUTTON SECTION */}

          <Grid 
              container
              display={ !!errorMessage ? '' : 'none' }
              sx={{ mt: 1 }}
            >
              <Grid
                item
                xs={12}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                type="submit" 
                variant="contained"fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                onClick={onGoogleSubmit} 
                variant="contained" 
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Create account link */}
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
