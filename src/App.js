import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostData from "./components/RestApi/PostData";
import DetailData from "./components/RestApi/DetailData";
import PutData from "./components/RestApi/PutData";
import Navigation from "./components/Navigation";
import DataApi from "./components/RestApi/DataApi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<DataApi />} />
            <Route exact path="tambah" element={<PostData />} />
            <Route
              exact
              path="detail-product/:id"
              element={<DetailData />}
            />
            <Route exact path="edit-product/:id" element={<PutData />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
