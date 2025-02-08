
import React from "react";

const Footer = ()=>{
  return (
    /* 1st biggest div1 */
   <div className="flex items-center justify-center   mx-auto w-[1440px] h-[505px]">
  {/* 2nd div in 1st biggest div */}
  <div className="flex flex-col justify-between w-[1240px] h-[419px] bg-white">
    {/* Top Content */}
    <div className="flex">
      <ul>
        <li>
          <h2 className="font-poppins font-[700] text-[24px] leading-[36px] text-[#000000] mb-12">
            Furniro
          </h2>
        </li>
        <li>
          <p className="text-gray-500 text-left">
            400 University Drive Suite 200
            <br />
            Coral <br />
            Gables, FL 33134 USA
          </p>
        </li>
      </ul>

      {/* Links Div */}
      <div className="flex justify-evenly ml-[130px] mr-[100px]">
        <div>
          <ul>
            <h2 className="w-[40px] h-[24px] mb-14 font-poppins text-[16px] font-[500] text-[#9F9F9F] leading-[24px]">
              Links
            </h2>
            <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
              Home
            </li>
            <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
              Shop
            </li>
            <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
              About
            </li>
            <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Help Div */}
      <div className="ml-[130px] mr-[100px]">
        <h2 className="w-[40px] h-[24px] mb-14 font-poppins text-[16px] font-[500] text-[#9F9F9F] leading-[24px]">
          Help
        </h2>
        <ul>
          <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
            PaymentOptions
          </li>
          <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
            Returns
          </li>
          <li className="w-[45px] h-[24px] mb-6 font-poppins text-[16px] font-[600] text-[#000000] leading-[24px]">
            PrivacyPolicies
          </li>
        </ul>
      </div>

      {/* Newsletter Div */}
      <div className="flex justify-evenly ml-[100px]">
        <ul>
          <li>
            <h2 className="w-[40px] h-[24px] mb-14 font-poppins text-[16px] font-[500] text-[#9F9F9F] leading-[24px]">
              Newsletter
            </h2>
          </li>
          <li className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[200px] h-[24px] text-[18px] leading-[21px] font-[400] font-poppins text-[#9f9f9f] border-b-[1px] border-black"
            />
            <h2 className="font-poppins border-b-[1px] font-[600] border-black text-[14px] leading-[21px] ml-2">
              SUBSCRIBE
            </h2>
          </li>
        </ul>
      </div>
    </div>
 {/* Hr Line */}
 <hr className="border-gray-300 my-4" />

    {/* Bottom Content */}
    <div className="text-left">
      <h2 className="font-poppins text-[16] font-[400] leading-[24px] text-black">
        2023 Furniro. All rights reserved.
      </h2>
    </div>
  </div>
</div>

  );
};

export default Footer;
