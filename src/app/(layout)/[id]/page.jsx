'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

function About({ params }) {
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setSingleData(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            width={500}
            height={500}
            src={singleData?.images?.[0] || '/placeholder.jpg'}
            alt={singleData?.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{singleData?.title}</h1>
            <p className="text-lg text-gray-600 mt-4">{singleData?.description}</p>
          </div>
          <div className="mt-6">
            <p className="text-xl font-semibold text-[#B88E2F]">${singleData?.price}</p>
            <button className="mt-4 py-3 px-6 bg-[#B88E2F] text-white font-semibold rounded-lg hover:bg-[#A0782F] transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
