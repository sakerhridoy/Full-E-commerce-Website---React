import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { GoShieldCheck } from 'react-icons/go';
import { HiOutlineArrowSmallUp } from 'react-icons/hi2';

const Services = () => {
  return (
    <>
      <section className="pb-[140px]">
        <div className="container relative">
          <div className="flex gap-[88px] justify-center">
            <div className="w-[22%] text-center">
              <div className="w-20 h-20 bg-[rgba(47,46,48,0.3)] rounded-full p-[11px] text-center mx-auto">
                <div className="w-[58px] h-[58px] bg-black rounded-full p-[11px] text-center">
                  <a href="">
                    <TbTruckDelivery className="text-white text-4xl leading-11" />
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <h4 className="font-poppins font-semibold text-xl text-black leading-7 pb-2">
                  <a href="">FREE AND FAST DELIVERY</a>
                </h4>
                <p className="font-poppins font-normal text-sm text-black leading-[21px]">
                  <a href="">Free delivery for all orders over $140</a>
                </p>
              </div>
            </div>
            <div className="w-[22%] text-center">
              <div className="w-20 h-20 bg-[rgba(47,46,48,0.3)] rounded-full p-[11px] text-center mx-auto">
                <div className="w-[58px] h-[58px] bg-black rounded-full p-[11px] text-center">
                  <a href="">
                    <TfiHeadphoneAlt className="text-white text-4xl leading-11 transform scale-x-[-1]" />
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <h4 className="font-poppins font-semibold text-xl text-black leading-7 pb-2">
                  <a href="">24/7 CUSTOMER SERVICE</a>
                </h4>
                <p className="font-poppins font-normal text-sm text-black leading-[21px]">
                  <a href="">Friendly 24/7 customer support</a>
                </p>
              </div>
            </div>
            <div className="w-[22%] text-center">
              <div className="w-20 h-20 bg-[rgba(47,46,48,0.3)] rounded-full p-[11px] text-center mx-auto">
                <div className="w-[58px] h-[58px] bg-black rounded-full p-[11px] text-center">
                  <a href="">
                    <GoShieldCheck className="text-white text-4xl leading-11" />
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <h4 className="font-poppins font-semibold text-xl text-black leading-7 pb-2">
                  <a href="">MONEY BACK GUARANTEE</a>
                </h4>
                <p className="font-poppins font-normal text-sm text-black leading-[21px]">
                  <a href="">We reurn money within 30 days</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] w-[46px] h-[46px] p-[13px] rounded-full cursor-pointer text-center absolute -bottom-28 -right-11">
            <a href="">
              <HiOutlineArrowSmallUp className="text-xl text-black font-bold leading-11 " />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services