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
  const bannerItems = [
    {
      id: 1,
      logo: apple,
      series: 'iPhone 14 Series',
      voucher: 'Up to 10% off Voucher',
      btn: 'Shop Now',
      arrow: IoArrowForward,
      img: banner,
    },
    {
      id: 2,
      logo: apple,
      series: 'iPhone 15 Series',
      voucher: 'Up to 15% off Voucher',
      btn: 'Shop Now',
      arrow: IoArrowForward,
      img: iphone15,
    },
    {
      id: 3,
      logo: apple,
      series: 'iPhone 16 Series',
      voucher: 'Up to 20% off Voucher',
      btn: 'Shop Now',
      arrow: IoArrowForward,
      img: iphone16,
    },
    {
      id: 4,
      logo: apple,
      series: 'iPhone 17 Series',
      voucher: 'Up to 10% off Voucher',
      btn: 'Shop Now',
      arrow: IoArrowForward,
      img: iphone17,
    },
  ];
   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 2000,
     fade: true,
     cssEase: 'linear',
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
   };
  return (
    <>
      <section >
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
                  {
                    bannerItems.map(bItems => (
                    <div key={bItems.id} className="item">
                      <div className="bg-black flex gap-[38px] justify-center items-center ps-16 pt-4">
                        <div className="w-[40%]">
                          <div>
                            <div className="flex gap-6 items-center mb-4 rel">
                              <img
                                src={bItems.logo}
                                alt="apple"
                                className="w-10"
                              />
                              <p className="font-poppins text-base text-[#fafafa]">
                                {bItems.series}
                              </p>
                            </div>

                            <h2 className="font-inter font-semibold text-[48px] leading-[60px] pb-[22px] text-[#fafafa] tracking-[4%] pe-12">
                              {bItems.voucher}
                            </h2>

                            <div className="flex gap-2 items-center">
                              <button className="bg-transparent font-poppins text-base text-[#fafafa] pb-1 border-b border-[#fafafa]">
                                {bItems.btn}
                              </button>

                              <bItems.arrow className="text-[#fafafa] text-xl" />
                            </div>
                          </div>
                        </div>

                        <div className="w-[60%] flex justify-end">
                          <img
                            src={bItems.img}
                            alt="banner"
                            className="w-[396px] h-[352px]"
                          />
                        </div>
                      </div>
                    </div>
                    ))
                  }
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