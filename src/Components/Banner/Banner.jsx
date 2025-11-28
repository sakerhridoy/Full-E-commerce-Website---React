import React from 'react'
import banner from '../../assets/Images/banner.png';
import iphone15 from '../../assets/Images/iphone15.png';
import iphone16 from '../../assets/Images/iphone16.png';
import iphone17 from '../../assets/Images/iphone17.png';
import apple from '../../assets/Images/appleLogo.png';
import { IoArrowForward } from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Banner = () => {
   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 2500,
     speed: 800,
     fade: true,
     cssEase: 'linear',
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
   };
  return (
    <>
      <section className="border-t-[0.5px] border-[rgba(0,0,0,0.25)]">
        <div className="container">
          <div className="flex gap-[45px] justify-between">
            <div className="w-[20%] flex flex-col gap-6 pt-10 border-r-[0.5px] border-[rgba(0,0,0,0.25)] banner_menu">
              <a href="">Woman’s Fashion</a>
              <a href="">Men’s Fashion</a>
              <a href="">Home & Lifestyle</a>
              <a href="">Medicine</a>
              <a href="">Sports & Outdoor</a>
              <a href="">Baby’s & Toys</a>
              <a href="">Groceries & Pets</a>
              <a href="">Health & Beauty</a>
            </div>
            <div className="w-[80%] pt-10 ">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className="item">
                    <div className="bg-black flex gap-[38px] justify-center items-center ps-16 pt-4">
                      <div className="w-[40%]">
                        <div className="">
                          <div className="flex gap-6 items-center mb-4 rel">
                            <img src={apple} alt="apple" className="w-10" />
                            <p className="font-poppins font-normal text-base leading-6 text-[#fafafa]">
                              iPhone 14 Series
                            </p>
                          </div>
                          <h2 className="font-inter font-semibold text-[48px] leading[60px] pb-[22px] text-[#fafafa] tracking-[4%] pe-12">
                            Up to 10% off Voucher
                          </h2>
                          <div className="flex gap-2 items-center">
                            <button className="bg-transparent font-poppins font-medium text-base leading-6 text-[#fafafa] pb-1 border-b border-[#fafafa]">
                              Shop Now
                            </button>
                            <div className="">
                              <IoArrowForward className="text-[#fafafa] text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[60%] flex justify-end">
                        <img
                          src={banner}
                          alt="banner"
                          className="w-[396px] h-[352px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bg-[#011c30] flex gap-[38px] justify-center items-center ps-16 pt-4">
                      <div className="w-[40%]">
                        <div className="">
                          <div className="flex gap-6 items-center mb-4">
                            <img src={apple} alt="apple" className="w-10" />
                            <p className="font-poppins font-normal text-base leading-6 text-[#fafafa]">
                              iPhone 15 Series
                            </p>
                          </div>
                          <h2 className="font-inter font-semibold text-[48px] leading[60px] pb-[22px] text-[#fafafa] tracking-[4%] pe-12">
                            Up to 20% off Voucher
                          </h2>
                          <div className="flex gap-2 items-center">
                            <button className="bg-transparent font-poppins font-medium text-base leading-6 text-[#fafafa] pb-1 border-b border-[#fafafa]">
                              Shop Now
                            </button>
                            <div className="">
                              <IoArrowForward className="text-[#fafafa] text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[60%] flex justify-end">
                        <img
                          src={iphone15}
                          alt="iphone15"
                          className="w-[396px] h-[352px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bg-[#570502] flex gap-[38px] justify-center items-center ps-16 pt-4">
                      <div className="w-[40%]">
                        <div className="">
                          <div className="flex gap-6 items-center mb-4">
                            <img src={apple} alt="apple" className="w-10" />
                            <p className="font-poppins font-normal text-base leading-6 text-[#fafafa]">
                              iPhone 16 Series
                            </p>
                          </div>
                          <h2 className="font-inter font-semibold text-[48px] leading[60px] pb-[22px] text-[#fafafa] tracking-[4%] pe-12">
                            Up to 15% off Voucher
                          </h2>
                          <div className="flex gap-2 items-center">
                            <button className="bg-transparent font-poppins font-medium text-base leading-6 text-[#fafafa] pb-1 border-b border-[#fafafa]">
                              Shop Now
                            </button>
                            <div className="">
                              <IoArrowForward className="text-[#fafafa] text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[60%] flex justify-end">
                        <img
                          src={iphone16}
                          alt="iphone16"
                          className="w-[396px] h-[352px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bg-[#bd3702] flex gap-[38px] justify-center items-center ps-16 pt-4">
                      <div className="w-[40%]">
                        <div className="">
                          <div className="flex gap-6 items-center mb-4">
                            <img src={apple} alt="apple" className="w-10" />
                            <p className="font-poppins font-normal text-base leading-6 text-[#fafafa]">
                              iPhone 17 Series
                            </p>
                          </div>
                          <h2 className="font-inter font-semibold text-[48px] leading[60px] pb-[22px] text-[#fafafa] tracking-[4%] pe-12">
                            Up to 10% off Voucher
                          </h2>
                          <div className="flex gap-2 items-center">
                            <button className="bg-transparent font-poppins font-medium text-base leading-6 text-[#fafafa] pb-1 border-b border-[#fafafa]">
                              Shop Now
                            </button>
                            <div className="">
                              <IoArrowForward className="text-[#fafafa] text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[60%] flex justify-end">
                        <img
                          src={iphone17}
                          alt="iphone17"
                          className="w-[396px] h-[352px]"
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner