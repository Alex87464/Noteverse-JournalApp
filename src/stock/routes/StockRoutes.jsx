import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { StockPage, SearchPage } from "../pages";


export const StockRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="stock" element={<StockPage />} />
                {/* <Route path="dc" element={} /> */}
                
                <Route path="search" element={<SearchPage />} />
                {/* <Route path="hero/:id" element={} /> */}


                <Route path="/" element={<Navigate to="/stock" />} />
            </Routes>
        </>
    )
}