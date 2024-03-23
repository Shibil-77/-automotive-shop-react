/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import EditProduct from "../editProduct/EditProduct";
import Modal from "../Modal/Modal";
import {
  getAllProductsApi,
  removeProductApi,
} from "../../Api/productApi/product";

const AddStock = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [editProductID, setEditProductID] = useState(null);
  useEffect(() => {
    getAllProducts();
  }, [status]);

  const getAllProducts = async () => {
    const productDetails = await getAllProductsApi();
    if (productDetails) {
      setProductData(productDetails.productData);
    }
  };

  const removeProduct = async (id) => {
    console.log(id);
    const res = await removeProductApi(id);
    if (res.status) {
      setStatus(!status);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 mx-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex justify-end">
            <button
              className="bg-primary text-white active:bg-blue-500 font-play uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New Product
            </button>
          </div>
          {showModal ? (
            <Modal
              setShowModal={setShowModal}
              setStatus={setStatus}
              status={status}
            />
          ) : null}
          {showEdit ? (
            <EditProduct
              setShowEdit={setShowEdit}
              id={editProductID}
              setStatus={setStatus}
              status={status}
            />
          ) : null}

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productData &&
                productData.map((value) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img src={value?.images?.secure_url} alt="" className="w-16 h-16"/>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {value.product}
                        </th>
                        <td className="px-6 py-4"> {value?.stock}</td>
                        <td className="px-6 py-4">{value?.category}</td>
                        <td className="px-6 py-4">${value?.price}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => {
                              setShowEdit(true);
                              setEditProductID(value?._id);
                            }}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              removeProduct(value?._id);
                            }}
                            className="ml-3 font-medium text-red-600 dark:text-blue-500 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddStock;
