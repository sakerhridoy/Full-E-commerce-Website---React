import React, { useEffect, useState } from 'react';
import banner from '../../assets/Images/banner.png';
import iphone15 from '../../assets/Images/iphone15.png';
import iphone16 from '../../assets/Images/iphone16.png';
import iphone17 from '../../assets/Images/iphone17.png';
import apple from '../../assets/Images/appleLogo.png';
import { IoArrowForward } from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://dummyjson.com/products/categories'
        );

        // API থেকে আসা ডেটা চেক করুন
        console.log('Categories API Response:', response.data);

        // ডেটা সঠিকভাবে আসছে কিনা চেক করুন
        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          setCategories([]);
          setError('No categories found');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
      <section>
        <div className="container">
          <div className="flex gap-[45px] justify-between">
            {/* Categories Sidebar */}
            <div className="w-[20%] flex flex-col gap-6 pt-10 border-r-[0.5px] border-[rgba(0,0,0,0.25)] banner_menu">
              {loading ? (
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 bg-gray-200 animate-pulse rounded"
                    ></div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-red-500 text-sm">{error}</div>
              ) : categories.length > 0 ? (
                categories.slice(0, 8).map((cate, index) => (
                  <Link
                    key={cate.slug || index}
                    to={`/products/category/${cate.slug}`} // ✅ Corrected route path
                    className="text-gray-700 hover:text-[#DB4444] transition-colors duration-200 font-poppins text-sm md:text-base"
                  >
                    {cate.name}
                  </Link>
                ))
              ) : (
                <div className="text-gray-500">No categories available</div>
              )}
            </div>

            {/* Banner Slider */}
            <div className="w-[80%] pt-10">
              <div className="slider-container">
                <Slider {...settings}>
                  {bannerItems.map(bItems => (
                    <div key={bItems.id} className="item">
                      <div className="bg-black flex gap-[38px] justify-center items-center ps-16 pt-4 rounded-lg overflow-hidden">
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

                            <Link
                              to="/shop"
                              className="flex gap-2 items-center"
                            >
                              <button className="bg-transparent font-poppins text-base text-[#fafafa] pb-1 border-b border-[#fafafa] hover:text-[#DB4444] hover:border-[#DB4444] transition-colors duration-200">
                                {bItems.btn}
                              </button>

                              <IoArrowForward className="text-[#fafafa] text-xl" />
                            </Link>
                          </div>
                        </div>

                        <div className="w-[60%] flex justify-end">
                          <img
                            src={bItems.img}
                            alt="banner"
                            className="w-[396px] h-[352px] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
