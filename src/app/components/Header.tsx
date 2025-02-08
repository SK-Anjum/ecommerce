import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function Header() {
  return (
    <header className="shadow-md">
      <div className="container  w-[1440px] h-[100px]  mx-auto bg-white px-8 flex items-center justify-between ">
        <div className="flex ">
          {/*Logo*/}
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-[32px] w-[50px]"
          />

          <span className="text-black text-[40px] leading-[42px]  font-bold ">
            Furniro{" "}
          </span>
        </div>
        {/*menu*/}

        <ul className=" flex gap-20 text-[16px] weight-[500px] leading-[24px]">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
          <Link href="./shop">Shop</Link>
          </li>
          <li>
            <Link href="./blog">Blog</Link>
          </li>
          <li>
            <Link href="./contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-6">
          <FaRegUser className="w-6 h-6 ml-[2.33px] " />
          <IoSearchOutline className="w-7 h-7 ml-[2.33px]" />
          <IoMdHeartEmpty className="w-6 h-6 ml-[2.33px]" />
          <IoCartOutline className="w-7 h-7 ml-[2.33px]" />
        </div>
      </div>
    </header>
  );
}

export default Header;
