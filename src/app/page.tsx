import React from 'react'

function page() {
  return (
    <div>
    {/*Hero section*/}

    <div className='w-[1440px] h-[717px] mx-auto round-[10px] flex relative'>
      <img src="/images/pic1.png" alt='pic1' className='w-[100%] h-[100%]'></img>
    <div className='w-[643px] h-[443px] mt-[152px] ml-[739px] bg-[#FFF3E3] absolute'>
      <div className='w-[561px] h-[344px] mt-[64px] ml-[39px]'>
          <p className='text-[16px] weight-[600px] text-[#333333] leading-6'>New Arival</p>
          <p className='text-[52px] weight-[700px] text-[#BBBE2F] leading-[65px]'>Discover Our <br/> New Collection</p>
          <p className='text-[18px] weight-[500px] text-[#333333] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='bg-[#BBBE2F] w-[224px] h-[74px] mt-14 px-[72px] py-6 text-[#FFFFFF] text-[16px] weight-[700px] leading-[24px] '>BUY NOW</button>
      </div>
    </div>
    </div>

{/* // 2nd section */}
<div className=" mx-auto w-[1440px] h-[685px]  mt-0 pt-0 bg-white ">
        <section className=" items-center  w-[1138px] h-[685px] mt-[30px] ml-[131px] bg-white mx-auto ">
          <span className="  h-[76.71px] my-[869px] mx-[449px] ">
            <h1 className="text-[32px] weight-[700px] leading-[48px] font-poppine text-center">
              Browse the range
            </h1>
            <p className="  text-[20px] h-[28.71px]  leading-[30px]  font-poppine text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </span>

          <div className="flex flex-row justify-between items-center ">
            <ul className="flex justify-evenly gap-[20px]">
              <li>
                {/*Card1*/}
                <img
                  src="/images/dining.png"
                  alt="dining"
                  className="w-[381px] h-[480px] object-contain "
                />
                <h1 className="text-center text-[24px] weight-[600px] leading-9  font-poppins text-[#333333]">
                  Dining
                </h1>
              </li>
              <li>
                {/*Card2*/}
                <img
                  src="/images/living.png"
                  alt="living"
                  className="w-[381px] h-[480px] object-contain "
                />
                <h1 className="text-center text-[24px] weight-[600px] leading-9 font-poppins text-[#333333]  ">
                  Living
                </h1>
              </li>
              <li>
                {/*Card3*/}
                <img
                  src="/images/bed.png"
                  alt="bed"
                  className="w-[381px] h-[480px] object-contain "
                />
                <h1 className="text-center text-[24px] weight-[600px] leading-9 font-poppins text-[#333333]">
                  Bedroom
                </h1>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/*section 3a*/}

      <div className="flex flex-col gap-[32px] h-[1084px] w-[1236px] border-x-2 border-y-2 border-solid  border-[#BBBE2F]  mx-auto  ">
        <div className="text-center">
          <h1 className="text-[42px] weight-[900px] leading-[48px] font-poppins text-[#3A3A3A]">
            Our Products
          </h1>
        </div>
        <div className="flex gap-[32px] ">
          <div className="h-[446px] w-[285px] mt-0 ">
            <img
              src="/images/image1.png"
              alt="image1"
              className="w-[381px] h-[446] object-contain"
            />

            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 ">
              Syltherine
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Stylish Cafe Chair
            </h1>

            <span className="flex gap-10 p-2">
              <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] ">
                Rp 2,500.000
              </h1>
              <h1
                className="text-[16px] weight-[400px] leading-[24px] 
                text-[#B0B0B0] line-through ">Rp 3,500.000
              </h1>
            </span>
          </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/image2.png"
              alt="image2"
              className="w-[381px] h-[446] object-contain"
            />

            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 "> Leviosa
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Stylish Cafe Chair
            </h1>
                   
              <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                Rp 2,500.000
              </h1>
            
          </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/image3.png"
              alt="image3"
              className="w-[381px] h-[446] object-contain"  />
            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 " >
              Lolito
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Luxary Big Sofa
            </h1>

            <span className="flex gap-10 px-1 py-2">
              <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] ">
                Rp 7.000.000 </h1>
              <h1
                className="text-[16px] weight-[400px] leading-[24px] 
                text-[#B0B0B0] line-through "> Rp 14.000.000
              </h1>
            </span>
          </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/image4.png"
              alt="image4"
              className="w-[381px] h-[446] object-contain"/>
            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 ">Respira
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Outdoor bar table and stool
            </h1>
           <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                Rp 500.000
              </h1>
             </div>
        </div>


     {/*Section 3b*/}
     
        <div className="flex gap-[32px] ">
          <div className="h-[446px] w-[285px] mt-0 ">
            <img
              src="/images/images1.png"
              alt="images1"
              className="w-[381px] h-[446] object-contain"
            />

            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 "
            >Grifo
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Night Lamp
            </h1>
            <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2">
                Rp 1,500.000
            </h1>
            </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/images2.png"
              alt="images2"
              className="w-[381px] h-[446] object-contain" />
            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 "> Muggo
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
             Small Mug
            </h1>
            <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2">
                Rp 1,500.000
            </h1>
          </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/images3.png"
              alt="images3"
              className="w-[381px] h-[446] object-contain"/>
            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 " >Pingky
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
             Cute bed set
            </h1>

            <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2">
                Rp 7,000.000
            </h1>
          </div>

          <div className="h-[446px] w-[285px] mt-0">
            <img
              src="/images/images4.png"
              alt="images4"
              className="w-[381px] h-[446] object-contain"/>
            <h1
              className="text-[24px] weight-[600px] leading-[28px] font-poppins
                 text-[#3A3A3A] mt-[10px] p-2 " >Potty
            </h1>
            <h1 className="text-[16px] weight-[500px] leading-[24px] text-[#898989] p-2">
              Minimalist flower pot
            </h1>

            <h1 className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2">
                Rp 500.000
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
        <div className=" w-[245px] h-[48px] border border-[#7e4040] px-20 py-2">
          <h1 className="text-[16px] weight-[600px] leading-[24px] font-poppins text-[#BBBE2F]">
            Show More  </h1>
        </div>
        </div>
          
      </div>


    {/*main div*/}
    </div>
  )
}

export default page
