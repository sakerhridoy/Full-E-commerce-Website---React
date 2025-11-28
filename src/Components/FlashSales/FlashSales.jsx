import React from 'react'
import nwArrival from '../../assets/images/nwArrival.png'
import { FaStar } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { useCountdown } from '../../Context/Provider/CountDownContextProvider';

const FlashSales = () => {
  const { seconds, minutes, hours, days } = useCountdown(); 
  return (
    <>
      <section className="pt-24">
        <div className="container">
          <div className="section-title mb-[31px]">
            <div className="mb-[13px] relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
              <h4 className="font-poppins font-semibold text-base text-[#DB4444]">
                Today’s
              </h4>
            </div>
            <div className="flex justify-between items-center gap-[470px]">
              <div className="flex gap-[87px] items-center">
                <h2 className="font-inter font-semibold text-4xl text-black leading-12 tracking-[4%]">
                  Flash Sales
                </h2>
                {/* timer component start */}
                <div className="flex gap-[17px] items-center">
                  <div className="days">
                    <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
                      Days
                    </h4>
                    <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
                      {days >= 10 ? days : `0${days}`}
                    </h3>
                  </div>
                  <div className="colon">
                    <span className="text-xl text-[#E07575]">:</span>
                  </div>
                  <div className="hours">
                    <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
                      Hours
                    </h4>
                    <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
                      {hours >= 10 ? hours : `0${hours}`}
                    </h3>
                  </div>
                  <div className="colon">
                    <span className="text-xl text-[#E07575]">:</span>
                  </div>
                  <div className="minutes">
                    <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
                      Minutes
                    </h4>
                    <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
                      {minutes >= 10 ? minutes : `0${minutes}`}
                    </h3>
                  </div>
                  <div className="colon">
                    <span className="text-xl text-[#E07575]">:</span>
                  </div>
                  <div className="seconds">
                    <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
                      Seconds
                    </h4>
                    <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
                      {seconds >= 10 ? seconds : `0${seconds}`}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-[#F5F5F5] p-4 rounded-full text-center cursor-pointer">
                  <GoArrowLeft className="text-base text-black" />
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded-full text-center cursor-pointer">
                  <GoArrowRight className="text-base text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[30px] pb-[118px]">
            <div className="item group">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                  src={nwArrival}
                  alt=""
                />
                <div className="discount-badge absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-sm">
                  <p className="font-poppins font-normal text-xs text-[#fafafa] leading-[18px]">
                    -40%
                  </p>
                </div>
                <div className="discount-badge absolute top-3 right-3 px-3">
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                    <FaRegHeart className="text-base text-black" />
                  </div>
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                    <IoEyeOutline className="text-base text-black" />
                  </div>
                </div>
                <div
                  className="py-2 bg-black text-center rounded-b-sm absolute -bottom-[26px] left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    group-hover:bottom-0 ease-in-out"
                >
                  <p className="font-poppins font-medium text-base text-white leading-6">
                    <a href="">Add To Cart</a>
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  HAVIT HV-G92 Gamepad
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$120</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$160</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (88)
                  </span>
                </div>
              </div>
            </div>
            <div className="item group">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                  src={nwArrival}
                  alt=""
                />
                <div className="discount-badge absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-sm">
                  <p className="font-poppins font-normal text-xs text-[#fafafa] leading-[18px]">
                    -40%
                  </p>
                </div>
                <div className="discount-badge absolute top-3 right-3 px-3">
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                    <FaRegHeart className="text-base text-black" />
                  </div>
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                    <IoEyeOutline className="text-base text-black" />
                  </div>
                </div>
                <div
                  className="py-2 bg-black text-center rounded-b-sm absolute -bottom-[26px] left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    group-hover:bottom-0 ease-in-out"
                >
                  <p className="font-poppins font-medium text-base text-white leading-6">
                    <a href="">Add To Cart</a>
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  HAVIT HV-G92 Gamepad
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$120</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$160</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (88)
                  </span>
                </div>
              </div>
            </div>
            <div className="item group">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                  src={nwArrival}
                  alt=""
                />
                <div className="discount-badge absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-sm">
                  <p className="font-poppins font-normal text-xs text-[#fafafa] leading-[18px]">
                    -40%
                  </p>
                </div>
                <div className="discount-badge absolute top-3 right-3 px-3">
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                    <FaRegHeart className="text-base text-black" />
                  </div>
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                    <IoEyeOutline className="text-base text-black" />
                  </div>
                </div>
                <div
                  className="py-2 bg-black text-center rounded-b-sm absolute -bottom-[26px] left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    group-hover:bottom-0 ease-in-out"
                >
                  <p className="font-poppins font-medium text-base text-white leading-6">
                    <a href="">Add To Cart</a>
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  HAVIT HV-G92 Gamepad
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$120</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$160</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (88)
                  </span>
                </div>
              </div>
            </div>
            <div className="item group">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                  src={nwArrival}
                  alt=""
                />
                <div className="discount-badge absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-sm">
                  <p className="font-poppins font-normal text-xs text-[#fafafa] leading-[18px]">
                    -40%
                  </p>
                </div>
                <div className="discount-badge absolute top-3 right-3 px-3">
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                    <FaRegHeart className="text-base text-black" />
                  </div>
                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                    <IoEyeOutline className="text-base text-black" />
                  </div>
                </div>
                <div
                  className="py-2 bg-black text-center rounded-b-sm absolute -bottom-[26px] left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    group-hover:bottom-0 ease-in-out"
                >
                  <p className="font-poppins font-medium text-base text-white leading-6">
                    <a href="">Add To Cart</a>
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  HAVIT HV-G92 Gamepad
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$120</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$160</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (88)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-[102px]">
            <a
              href=""
              className="bg-[#DB4444] text-center py-4 px-12 rounded-sm font-poppins font-medium text-base text-[#fafafa] leading-6"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSales;