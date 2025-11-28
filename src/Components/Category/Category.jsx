import React from 'react';
import { CiMobile4 } from 'react-icons/ci';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { TbDeviceWatchStats } from 'react-icons/tb';
import { PiCameraThin } from 'react-icons/pi';
import { PiHeadphones } from 'react-icons/pi';
import { LuGamepad } from 'react-icons/lu';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';

const Category = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-title border-t border-[rgba(0,0,0,0.3)]">
            <div className="section-title mb-[31px] pt-20">
              <div className="mb-[13px] relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
                <h4 className="font-poppins font-semibold text-base text-[#DB4444]">
                  Categories
                </h4>
              </div>
              <div className="flex justify-between items-center gap-[470px]">
                <div className="flex gap-[87px] items-center">
                  <h2 className="font-inter font-semibold text-4xl text-black leading-12 tracking-[4%]">
                    Browse By Category
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
            <div className="pt-[60px] grid grid-cols-6 gap-[30px] pb-[130px]">
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <CiMobile4 className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  Phones
                </h3>
              </div>
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <HiOutlineComputerDesktop className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  Computers
                </h3>
              </div>
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <TbDeviceWatchStats className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  SmartWatch
                </h3>
              </div>
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <PiCameraThin className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  Camera
                </h3>
              </div>
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <PiHeadphones className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  HeadPhones
                </h3>
              </div>
              <div className="pt-[25px] pb-6 border border-[rgba(0,0,0,0.1)] rounded-sm text-center group hover:bg-[#DB4444] hover:cursor-pointer transition-all duration-300 ease-in-out">
                <LuGamepad className="text-center text-black text-2xl mx-auto font-bold w-14 h-14 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-poppins font-normal text-base text-black leading-6 pt-[22px] group-hover:text-white transition-colors duration-300">
                  Gaming
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
