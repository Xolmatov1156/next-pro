import React from 'react';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await getProducts();

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
          {products.splice(0,3).map((product) => (
            <div key={product.id} className="border p-4 border-black rounded-lg">
              <img src={product.thumbnail} alt={product.title} className="w-[381px] h-[480px] object-contain" />
              <h3 className="text-xl font-semibold mt-[30px] text-center">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}