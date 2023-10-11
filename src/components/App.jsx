import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Favorites from "../pages/Favorites";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={ <Navigate to="/" />} />
      </Route>
    </Routes>
  );
};