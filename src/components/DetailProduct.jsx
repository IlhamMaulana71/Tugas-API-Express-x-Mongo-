import React from "react";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="btn btn-primary px-5">
              kembali
            </Link>
          </div>
          <table className="table mt-3 table-hover table-light">
            <tbody>
              <tr>
                <td>ID</td>
                <td>: 123</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>: Laptop</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>: Rp. 20.000.000</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>: 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
