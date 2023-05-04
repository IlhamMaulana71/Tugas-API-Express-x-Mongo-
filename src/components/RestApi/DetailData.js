import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailData = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getDetailData = async () => {
    const response = await axios.get(`http://localhost:3000/api/v4/product/${id}`);
    setProducts(response.data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

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
                <td>: {products._id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>: {products.name}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>: {products.price}</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>: {products.stock}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailData;
