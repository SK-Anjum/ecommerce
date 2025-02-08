import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Prodapi from "../components/prodapi";

function shop() {
  const products = [
    {
      name: "Syltherine",
      des: "Stylish Cafe Chair",
      price: "Rp 1,500,000",
      img: "/images/image1.png",
    },
    {
      name: "Leviosa",
      des: "Stylish Cafe Chair",
      price: "Rp 2,500,000",
      img: "/images/image2.png",
    },
    {
      name: "Lolito",
      des: "Luxary Big Sofa",
      price: "Rp 3,500,000",
      img: "/images/image3.png",
    },
    {
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500,000",
      img: "/images/image4.png",
    },
  ];

  return (
    //main div//
    <div>
      <div className="container w-[1440px] h-[316px] mx-auto flex relative ">
        <img src="/images/rectangle1.png " alt="rect1"></img>
        <div className="flex flex-col justify-center items-center absolute w-[200px] h-[133px] mt-[65px] mx-[620px] ">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[77px] h-[70px] align-middle "
          ></img>
          <h1 className=" text-[48px] weight-[500px] linear-[72px]">Shop</h1>
          <div className="flex  relative ">
            <ul className="flex gap-[73px] mt-2 items-center ">
              <li className="text-[16px] font-semibold linear-[24px]">
                <Link href="/" className="flex absolute">
                  Home <FaAngleRight className="mt-1" />
                </Link>
              </li>
              <li className="text-[16px] font-normal linear-[24px]">
                <Link href="./contact" className="flex absolute">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="menu section w-[1290px] h-[100px] mx-[30px]  bg-[#F9F1E7] border-0 mb-[44px] ">
        <div className="flex justify-between ">
          <ul className="flex items-center justify-center gap-5 px-24 py-8">
            <li>
               <img
                src="/images/system-uicons_filtering.png"
                alt="logo"
                className="h-[25px] w-[25px] border-1px"
              />
            </li>

            <li className="text-[20px] font-normal leading-8 text-[#000000]">
               Filter
            </li>

            <li>
              <img
                src="/images/dot.png"
                alt="logo"
                className="h-[24px] w-[24px] border-2px"
              />
            </li>

            <li>
              <img
                src="/images/vector.png"
                alt="logo"
                className="h-[19px] w-[21px] border-1px"
              />
            </li>

            <li>
              <img
                src="/images/line 5.png"
                alt="logo"
                className="h-[37px] border-2px text-[#9F9F9F]"
              />
            </li>
            <li className="text-[16px] font-normal">
             Showing 1–16 of 32 results
            </li>
          </ul>
        
              <div>
                <ul className="flex items-center justify-center gap-5 px-24 py-5">
                  <li className="text-[20px] font-normal linear-[30px]">Show</li>
                  
                  <li><input type="number" className="forn-input  h-[55px] w-[54px] 
                  text-[20px] font-normal linear=[30px] text-center text-[#9F9F9F]" 
                  placeholder= "16"></input></li>

                <li className="text-[20px] font-normal linear-[30px]" >Sort by</li>
                
                <li><input type="number" className="forn-input  h-[55px] w-[188px] 
                  text-[20px] font-normal linear=[30px] text-center text-[#9F9F9F]" 
                  placeholder= "Default"></input></li>
                                
                </ul>

              </div>
      </div>
      </div>
      {/* product section grid */}
      <div className="container w-[1244px]  mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-446 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>
                <p className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
                  {product.des}
                </p>
                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* r2 */}
      <div className="container w-[1244px]  mx-auto mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-446 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>
                <p className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
                  {product.des}
                </p>
                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* r3 */}

      <div className="container w-[1244px]  mx-auto mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-446 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>
                <p className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
                  {product.des}
                </p>
                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* r4 */}

      <div className="container w-[1244px]  mx-auto mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-446 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>
                <p className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
                  {product.des}
                </p>
                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Api Data */}
      <Prodapi/>
    </div>
  );
}

export default shop;
