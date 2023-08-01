import { Navigate, Route, Routes } from "react-router-dom";

import { StockPage, SearchPage } from "../pages";
import Navbar from '../../ui/components/Navbar';


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