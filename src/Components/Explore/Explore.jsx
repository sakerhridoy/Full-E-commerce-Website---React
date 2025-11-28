import React from 'react'
import explore from '../../assets/images/explore.png'
import { FaStar } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const Explore = () => {
  return (
    <>
      <section className="pb-[168px]">
        <div className="container">
          <div className="section-title mb-[60px] pt-20">
            <div className="mb-[13px] relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
              <h4 className="font-poppins font-semibold text-base text-[#DB4444]">
                Our Products
              </h4>
            </div>
            <div className="flex justify-between items-center gap-[470px]">
              <div className="flex gap-[87px] items-center">
                <h2 className="font-inter font-semibold text-4xl text-black leading-12 tracking-[4%]">
                  Explore Our Products
                </h2>
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
          <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pb-[76px]">
            <div className="item group">
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
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
                  src={explore}
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
                  CANON EOS DSLR Camera
                </h3>

                <div className="flex items-center gap-1 py-2">
                  <p className="text-[#DB4444] font-poppins font-medium text-base leading-6 pe-1 pt-1">
                    $360
                  </p>
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[#FFAD33] text-lg" />
                  <FaStar className="inline text-[rgba(0,0,0,0.25)] text-lg" />
                  <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                    (88)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
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
}

export default Explore;