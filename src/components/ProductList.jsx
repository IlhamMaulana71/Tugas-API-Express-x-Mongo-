import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/tambah" className="btn btn-primary px-5">
              Tambah
            </Link>
            <input
              type="text"
              className="form-control w-50"
              placeholder="Masukan kata kunci..."
            />
          </div>
          <table className="table mt-3">
            <thead className="table-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Laptop Hp</td>
                <td>Rp. 17.000.000</td>
                <td className="d-flex gap-2">
                  <Link to="/detail-product" className="btn btn-primary btn-sm">
                    Detail
                  </Link>
                  <Link to="/edit-product" className="btn btn-warning btn-sm">
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
