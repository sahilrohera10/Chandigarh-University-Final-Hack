import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Pages/MainPage";
import ProductGrid from "./Pages/ProductsGrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ForumPage from "./Pages/ForumPage";
import Wishlist from "./Components/Wishlist";
// import SellProduct from "./Components/SellProduct";
// import AddProduct from "./Components/AddProduct";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import ProductDetail from "./screens/ProductDetail";
import ShowProducts from "./screens/ShowProducts";
import FoodMap from "./FoodOrdering/FoodMap";
import Main from "./FoodOrdering/Main";
import MenuPage from "./FoodOrdering/MenuPage";

function App() {
  return (
    <>
      {/* <MainPage /> */}
      {/* <ProductGrid /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="products/:Category" element={<ProductGrid />} />
        <Route path="forumpage" element={<ForumPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        {/* <Route path="addProduct" element={<AddProduct />} /> */}
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="campuseats" element={<Main />} />
        <Route path="menupage" element={<MenuPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
