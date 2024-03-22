import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Layout from "../layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";
import { getAllProductsApi } from "../../Api/productApi/product";

const Home = () => {
  const [productData, setProductData] = useState([{}]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const res = await getAllProductsApi();
    setProductData(res?.productData);
  };

  const arr = [1, 2, 4, 5, 4, 4];
  return (
    <>
      <Layout>
        <Hero />
        <div className="flex flex-wrap justify-center">
          {productData &&
            productData.map((value) => {
              return <ProductCard />;
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
