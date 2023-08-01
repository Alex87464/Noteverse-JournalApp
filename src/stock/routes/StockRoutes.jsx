import { Navigate, Route, Routes } from "react-router-dom";
import { StockPage } from "../pages/StockPage";

export const StockRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StockPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
