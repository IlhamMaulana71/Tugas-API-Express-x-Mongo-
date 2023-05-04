import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostData = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const Save = async (e) => {
    e.preventDefault();
    try {
      setActive(true);
      if (name.length === 0 || price.length === 0 || stock.length === 0) {
        setErrors({ errors: true });
      } else {
        const result = await axios({
          method: "post",
          url: "http://localhost:3000/api/v4/product",
          data: {
            name,price,stock,status:active
          },
          headers: {"Content-Type":"multipart/form-data"}
        })
        console.log(result);
        alert("Produk berhasil ditambahkan");
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      console.error(error);
    }
  };
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card w-50">
            <div className="card-body">
              <h4>Tambah Produk</h4>

              <form onSubmit={Save}>
                <div className="mb-2 mt-4">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Produk..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors && name <= 0 ? (
                    <label className="error">
                      *Nama produk tidak boleh kosong
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-2">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price Produk..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {errors && price <= 0 ? (
                    <label className="error">
                      *Price produk tidak boleh kosong
                    </label>
                  ) : (
                    ""
                  )}
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
                  {errors && stock <= 0 ? (
                    <label className="error">
                      *Stock produk tidak boleh kosong
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="active"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  />
                  <label>Active</label>
                </div>

                <button type="submit" className="btn btn-primary mt-3 px-4">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostData;
