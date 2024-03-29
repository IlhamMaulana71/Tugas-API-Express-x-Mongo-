import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils/util";

const DataApi = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const GetData = async () => {
    const response = await axios.get("http://localhost:3000/api/v4/product");
    setProducts(response.data);
  };

  const DeleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v4/product/${id}`);
      GetData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (search === "") {
        return product;
      } else if (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        numberWithCommas(product.price).includes(search)
      ) {
        return product;
      }
    });
    setSearchResult(filteredProducts);
  }, [search, products]);

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
              onChange={(e) => setSearch(e.target.value)}
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
              {searchResult.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Data not found
                  </td>
                </tr>
              ) : (
                searchResult.map((product, index) => (
                  <tr key={product._id}>
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>Rp. {numberWithCommas(product.price)}</td>
                    <td className="d-flex gap-2">
                      <Link
                        to={`detail-product/${product._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Detail
                      </Link>
                      <Link
                        to={`edit-product/${product._id}`}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => DeleteData(product._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataApi;
