import Navbar from "./components/Navbar";
import ApiFinit from "./pages/ApiFinit";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { Navigate, Route, Routes } from "react-router-dom";


export default function CookApp() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ApiFinit/" element={<ApiFinit/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>

        <Route path="/redirect" element={<Navigate to="/ApiFinit"/>}></Route>
      </Routes>
    </>
  )
}
