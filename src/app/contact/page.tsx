import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
function contact() {
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
          <h1 className=" text-[48px] weight-[500px] linear-[72px]">Contact</h1>
          <div className="flex  relative ">
            <ul className="flex gap-[73px] mt-2 items-center ">
              <li className="text-[16px] font-semibold linear-[24px]">
                {" "}
                <Link href="/" className="flex absolute">
                  Home <FaAngleRight className="mt-1" />
                </Link>
              </li>
              <li className="text-[16px] font-normal linear-[24px]">
                <Link href="./contact" className="flex absolute">
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*information section */}
      <div className="w-[1440px] h-[180px] mt-[24px] pt-0 mx-auto text-center ">
        <span className="text-[36px] weight-[600px] linear-[54px]  mt-[8px]">
          Get In Touch With Us
        </span>
        <p className="text-[16px] weight-[400px] linear-[24px] text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/*main information section */}
      <div className="w-[1058px] h-[700px]  mx-auto border-1 bg-slate-500]  ml-[210px] flex   ">
        {/*left section */}
        <div className="w-[400px] h-[537px] ">
          <p className="text-[24px] weight-[500px] linear-[36px]">
            <IoLocationSharp w-7 h-7 /> Address
          </p>
          <p className="text-[16px] weight-[400px] linear-[24px]">
            236 5th SE Avenue, New <br />
            York NY10000, United <br />
            States
          </p>

          <p className="text-[24px] weight-[500px] linear-[36px] mt-6 ">
            {" "}
            <FaPhoneAlt />
            Phone
          </p>
          <p className="text-[16px] weight-[400px] linear-[24px]">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>

          <p className="text-[24px] weight-[500px] linear-[36px] mt-6 ">
            <HiClock /> Working Time
          </p>
          <p className="text-[16px] weight-[400px] linear-[24px]">
            Monday-Friday: 9:00 - <br /> 22:00 <br />
            Saturday-Sunday: 9:00 - <br /> 21:00
          </p>
        </div>

        {/*form right section*/}
        <div className="w-[635px] h-[923px] ">
          <form>
            <h1 className="text-[16px] weight-[500px] linear-[24px] text-[#000000] m-4">
              Your name
            </h1>
            <input
              type="text"
              className="form-input border border-[#9F9F9F] w-[532px] h-[75px] rounded-[10px]"
              placeholder="Abc"
            ></input>

            <h1 className="text-[16px] weight-[500px] linear-[24px] text-[#000000] m-4">
              Email address
            </h1>
            <input
              type="email"
              className="form-input border border-[#9F9F9F] w-[530px] h-[75px] rounded-[10px]"
              placeholder="Abc@def.com"
            ></input>

            <h1 className="text-[16px] weight-[500px] linear-[24px] text-[#000000] m-4">
              Subject
            </h1>
            <input
              type="text"
              className="form-input border border-[#9F9F9F] w-[530px] h-[75px] rounded-[10px]"
              placeholder="This is an optional"
            ></input>

            <h1 className="text-[16px] weight-[500px] linear-[24px] text-[#000000] m-4">
              Message
            </h1>
            <input
              type="text"
              className="form-input border border-[#9F9F9F] w-[530px] h-[120px] rounded-[10px]"
              placeholder="Hi! i’d like to ask about"
            ></input>

            <button className="w-[237px] h-[55px] text-[16px] weight-[400px] mt-8 bg-[#B88E2F] linear-[24px] border-[5px] brounded-[1px]  ">
              {" "}
              Submit
            </button>
          </form>
        </div>
       </div>
     {/* next to form div*/}
     
     <div className="  w-[1440px] h-[270px] bg-[#FAF3EA] flex gap-[2px] mx-auto justify-around items-center">
      
      <div className="flex">
        <img src="/images/trophy1.png" alt='trophy' className="h-[60px] w-[60px] "></img>
        <div className="flex flex-col"> <h1 className="text-[24px] weight-[600px] linear-[38px]">High Quality</h1>
        <p className="text-[20px] weight-[500px] linear-[30px] text-[#898989]">crafted from top materials</p></div>
      </div>
      
      <div className="flex">
        <img src="/images/guarantee.png" alt='guarantee' className="h-[60px] w-[60px] "></img>
        <div className="flex flex-col"> <h1 className="text-[24px] weight-[600px] linear-[38px]">Warranty Protection</h1>
        <p className="text-[20px] weight-[500px] lineaf-[30px] text-[#898989]">Over 2 years</p></div>
      </div>


      <div className="flex">
        <img src="/images/Shipping.png" alt='Shipping' className="h-[60px] w-[60px] "></img>
        <div className="flex flex-col"> <h1 className="text-[24px] weight-[600px] linear-[38px]">Free Shipping</h1>
        <p className="text-[20px] weight-[500px] lineaf-[30px] text-[#898989]">Order over 150 $</p></div>
      </div>



      <div className="flex">
        <img src="/images/Customer-support.png" alt='customer' className="h-[60px] w-[60px] "></img>
        <div className="flex flex-col"> <h1 className="text-[24px] weight-[600px] linear-[38px]">24 / 7 Support</h1>
        <p className="text-[20px] weight-[500px] lineaf-[30px] text-[#898989]">Dedicated support</p></div>
      </div>


      

     </div>
     
     
     
     
      {/*main div */}
    </div>
  );
}

export default contact;
