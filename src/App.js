import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import DetailProduct from "./components/DetailProduct";
import EditProduct from "./components/EditProduct";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/tambah" element={<AddProduct />} />
            <Route exact path="/detail-product" element={<DetailProduct />} />
            <Route exact path="/edit-product" element={<EditProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
