import React from 'react'
import bestSelling from '../../assets/images/bestSelling.png'
import { FaStar } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const BestSelling = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-title border-t border-[rgba(0,0,0,0.3)]">
            <div className="section-title mb-[31px] pt-20">
              <div className="mb-[13px] relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
                <h4 className="font-poppins font-semibold text-base text-[#DB4444]">
                  This Month
                </h4>
              </div>
              <div className="flex justify-between items-center gap-[470px]">
                <div className="flex gap-[87px] items-center">
                  <h2 className="font-inter font-semibold text-4xl text-black leading-12 tracking-[4%]">
                    Best Selling Products
                  </h2>
                </div>
                <div className="flex justify-end">
                  <a
                    href=""
                    className="bg-[#DB4444] text-center py-4 px-12 rounded-sm font-poppins font-medium text-base text-[#fafafa] leading-6"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[30px] pb-[140px]">
            <div className="item">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative">
                <img className="mx-auto w-[172px]" src={bestSelling} alt="" />
                <div className="discount-badge absolute top-3 right-3 px-3">
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                                    <FaRegHeart className="text-base text-black" />
                                  </div>
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                                    <IoEyeOutline className="text-base text-black" />
                                  </div>
                                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  The north coat
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$260</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$360</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (65)
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative">
                <img className="mx-auto w-[172px]" src={bestSelling} alt="" />
                <div className="discount-badge absolute top-3 right-3 px-3">
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                                    <FaRegHeart className="text-base text-black" />
                                  </div>
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                                    <IoEyeOutline className="text-base text-black" />
                                  </div>
                                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  The north coat
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$260</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$360</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (65)
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative">
                <img className="mx-auto w-[172px]" src={bestSelling} alt="" />
                <div className="discount-badge absolute top-3 right-3 px-3">
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                                    <FaRegHeart className="text-base text-black" />
                                  </div>
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                                    <IoEyeOutline className="text-base text-black" />
                                  </div>
                                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  The north coat
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$260</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$360</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (65)
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative">
                <img className="mx-auto w-[172px]" src={bestSelling} alt="" />
                <div className="discount-badge absolute top-3 right-3 px-3">
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer mb-2">
                                    <FaRegHeart className="text-base text-black" />
                                  </div>
                                  <div className="bg-white p-[5px] rounded-full text-center cursor-pointer">
                                    <IoEyeOutline className="text-base text-black" />
                                  </div>
                                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-medium text-base text-black leading-6">
                  The north coat
                </h3>
                <p className="py-2 font-poppins font-medium text-base leading-6 flex items-center gap-3">
                  <span className="text-[#DB4444]">$260</span>
                  <del className="text-[rgba(0,0,0,0.5)]">$360</del>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (65)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSelling