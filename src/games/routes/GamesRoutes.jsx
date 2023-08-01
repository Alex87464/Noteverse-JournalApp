import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DetailsPage, GamesForm, GamesPage, SearchPage } from "../pages";


export const GamesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="games" element={<GamesPage />} />
        <Route path="upload" element={<GamesForm />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="details/:id" element={<DetailsPage />} />

        <Route path="/" element={<Navigate to="/games" />} />
      </Routes>
    </>
  );
};
