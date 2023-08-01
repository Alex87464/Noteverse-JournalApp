import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { StockRoutes } from "../stock/routes/StockRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp */}
      <Route path="/*" element={<StockRoutes />} />
    </Routes>
  );
};
