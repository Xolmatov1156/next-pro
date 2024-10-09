"use client"; // Add this at the top

import React, { useState, useEffect } from 'react';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); // Initially show 8 products

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    
    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 8); // Load 8 more products when clicked
  };

  return (
    <>
      <div className="w-screen h-[716px] hero-back">
        <div className="w-[643px] h-[443px] ml-[739px] absolute mt-[153px] bg-[#FFF3E3] ">
          <div className="w-[561px] h-[344px] mt-[62px] px-[40px]">
            <p className="font-bold text-[16px] tracking-wide text-[#333333]">New Arrival</p>
            <h3 className="text-[52px] text-[#B88E2F] font-bold mt-[10px] w-[400px] leading-[55px]">Discover Our New Collection</h3>
            <p className="text-[18px] mt-[17px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="uppercase mt-[46px] py-[25px] w-[222px] bg-[#B88E2F] text-white font-semibold">buy now</button>
          </div>
        </div>
      </div>

      <div className="w-[1183px] h-[685px] mx-auto mt-[56px]">
        <p className="text-center text-[32px] font-semibold">Browse The Range</p>
        <p className="text-center text-[20px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-3 gap-8 mt-[20px]">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="shadow-md cursor-pointer hover:scale-105 duration-300 shadow-black p-4 rounded-lg">
              <img src={product.thumbnail} alt={product.title} className="w-[381px] h-[480px] object-contain" />
              <h3 className="text-xl font-semibold mt-[30px] text-center">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[1183px] mx-auto my-[56px]">
        <p className="text-center text-[32px] font-semibold">Our Products</p>
        <div className="grid grid-cols-4 gap-[30px] mt-[20px]">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="shadow-md hover:scale-105 w-[285px] h-[446px] duration-300 cursor-pointer p-4 shadow-black rounded-lg">
              <img src={product.thumbnail} alt={product.title} className="w-[285px] h-[300px] object-contain" />
              <h3 className="text-xl font-semibold mt-[15px]">{product.brand}</h3>
              <h3 className="text-[18px] font-semibold mt-[10px] line-clamp-1">{product.title}</h3>
              <p className="text-[16px] font-semibold mt-[5px] text-gray-600">{product.price}$</p>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="text-center mt-[40px]">
            <button onClick={showMoreProducts} className="py-[15px] px-[30px] bg-[#B88E2F] text-white font-semibold rounded-lg">
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
