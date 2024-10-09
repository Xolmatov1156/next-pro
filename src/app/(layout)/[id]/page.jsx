'use client'
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

function About({ params }) {
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setSingleData(data);
    };
    fetchData()
  }, []);
  console.log(singleData)
  return <Image width="300" height="300" src={singleData?.images?.[0]}/>;
}

export default About;
