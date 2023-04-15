import React from "react";

const EditProduct = () => {
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card w-50">
            <div className="card-body">
              <h4>Edit Produk</h4>
              <div className="mb-2 mt-4">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Nama Produk..."
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Harga</label>
                <input
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="Harga Produk..."
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="Stock Produk..."
                />
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label">Active</label>
              </div>

              <button className="btn btn-primary mt-3 px-4">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
