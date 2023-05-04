import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PutData = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const axiosget = async () => {
    const response = await axios.get(`http://localhost:3000/api/v4/product/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setStock(response.data.stock);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/v4/product/${id}`, {
        name,
        price,
        stock,
        status: active,
      });
      alert("Produk Berhasil diupdateData");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosget();
  }, []);
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card w-50">
            <div className="card-body">
              <h4>Edit Produk</h4>
              <form onSubmit={updateData}>
                <div className="mb-2 mt-4">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Produk..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Harga</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Harga Produk..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Stock Produk..."
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  />
                  <label className="form-check-label">Active</label>
                </div>

                <button type="submit" className="btn btn-primary mt-3 px-4">
                  updateData
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutData;
