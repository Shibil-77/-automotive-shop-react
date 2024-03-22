/* eslint-disable no-undef */
import React, { useState } from "react";
import { valid, imageUpload } from "./functions";
import { addProduct } from "../../Api/productApi/product";

const Modal = ({ setShowModal }) => {
  const [images, setImages] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ErrMessage, setErrMessage] = useState("");
  const [image,setImage] = useState();
  const [formData, setFormData] = useState({
    product: "",
    price: null,
    stock: null,
    category: null,
    Description: "",
  });
  const [errors, setErrors] = useState({
    product: "",
    price: "",
    stock: "",
    category: "",
    Description: "",
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    imageUpload(files)
    setImage(files)
 
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    valid(setErrors, formData);
  };

  const addProductHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setLoading(true);
    imageUpload(image);
    const newErrors = await valid(setErrors, formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const response = await addProduct(formData);
      if (response?.status) {
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("userName", response.userName);
        console.log("login set");
        setLoading(false);
        setShowModal(false);
        // navigate("/");
      }

      if (response.message) {
        setLoading(false);
        setErrMessage(response.message);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">ADD PRODUCT</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="px-10">
                <div>
                  {/* <form className="mt-8 space-y-3"> */}
                  <div className="grid grid-cols-1 space-y-2">
                    <div className="flex items-center justify-center w-full">
                      <label className=" flex flex-col rounded-lg border-4 border-dashed w-full h-auto px-10 py-10 lg:py-0 group text-center">
                        <div className="h-full w-full py-10 text-center flex flex-col  justify-center items-center  ">
                          <div className="xl:flex gap-3">
                            <p className="pointer-none text-[#223263] mx-auto my-auto">
                              <span className="text-xl font-bold ">
                                Upload image
                              </span>{" "}
                              <br />
                              <span className="text-sm max-w-[10px]">
                                (345x255 or larger recommended, up to 1 MB each)
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="py-10">
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0 rounded-lg">
                        <label
                          htmlFor="grid-city"
                          className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                          Product Name
                        </label>
                        <input
                          onChange={handleInputChange}
                          id="grid-city"
                          type="text"
                          name="product"
                          value={formData.product}
                          placeholder=" Product Name"
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                      </div>
                      <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                        <label
                          htmlFor="grid-state"
                          className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                          Category
                        </label>
                        <div className="relative">
                          <select
                            onChange={handleInputChange}
                            id="grid-state"
                            name="category"
                            value={formData.category}
                            className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          >
                            <option value="car">Car</option>
                            <option value="bus">Bus</option>
                            <option value="bike">Bike</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                        <label
                          htmlFor="grid-zip"
                          className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                          Price*
                        </label>
                        <input
                          onChange={handleInputChange}
                          id="grid-zip"
                          type="text"
                          value={formData.price}
                          placeholder="xxxxx"
                          name="price"
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2 mt-7">
                      <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                        <label
                          htmlFor="grid-zip"
                          className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                          Product Stock
                        </label>
                        <input
                          onChange={handleInputChange}
                          id="grid-zip"
                          type="text"
                          value={formData.stock}
                          name="stock"
                          placeholder="xxxxx"
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                      </div>

                      <div className="w-full md:w-8/12 px-3 mb-6 md:mb-0 rounded-lg">
                        <label
                          for="message"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Description
                        </label>
                        <textarea
                          value={formData.description}
                          id="message"
                          onChange={handleInputChange}
                          name="description"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border-[1px] border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-[1px]"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

              {!loading && (
                <button
                  onClick={addProductHandler}
                  type="button"
                  className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Add Product
                </button>
              )}

              {loading && (
                <button
                  type="button"
                  className="flex justify-between ml-2 font-bold py-1 rounded bg-slate-700 hover:bg-slate-600 text-white px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mr-2 border border-gray-200  focus:z-10  focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Loading...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
