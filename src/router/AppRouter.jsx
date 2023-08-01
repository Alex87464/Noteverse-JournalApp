import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { StockRoutes } from '../stock';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <StockRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
