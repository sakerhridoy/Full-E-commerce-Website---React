import React from 'react';
import bestSelling from '../../assets/images/bestSelling.png';
import bSelling2 from '../../assets/images/bSelling2.png';
import bSelling3 from '../../assets/images/bSelling3.png';
import bSelling4 from '../../assets/images/bSelling4.png';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const BestSelling = () => {
  const bestSellingItems = [
    {
      id: 1,
      name: 'The north coat',
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
      img: bestSelling,
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      price: 960,
      oldPrice: 1160,
      rating: 4.5,
      reviews: 65,
      img: bSelling2,
    },
    {
      id: 3,
      name: 'RGB liquid CPU Cooler',
      price: 160,
      oldPrice: 170,
      rating: 4.5,
      reviews: 65,
      img: bSelling3,
    },
    {
      id: 4,
      name: 'Small BookSelf',
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
      img: bSelling4,
    },
  ];

  // ⭐ FULL STAR + HALF STAR FUNCTION
  const renderStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating); // 4 or 5
    const hasHalfStar = rating % 1 !== 0; // 0.5 hole true

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-[#FFAD33]" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-[#FFAD33]" />);
    }

    return stars;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="section-title border-t border-[rgba(0,0,0,0.3)]">
            <div className="section-title mb-[31px] pt-20">
              <div className="mb-[13px] relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
                <h4 className="font-poppins font-semibold text-base text-[#DB4444] leading-10">
                  This Month
                </h4>
              </div>

              <div className="flex justify-between items-center gap-[470px]">
                <h2 className="font-inter font-semibold text-4xl text-black">
                  Best Selling Products
                </h2>

                <a
                  href=""
                  className="bg-[#DB4444] hover:bg-[#b80808] transition-all duration-300 text-center py-4 px-12 rounded-sm font-poppins font-medium text-base text-[#fafafa]"
                >
                  View All
                </a>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-4 gap-[30px] pb-[140px]">
            {bestSellingItems.map(item => (
              <div key={item.id} className="item">
                <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative">
                  <img className="mx-auto w-[172px]" src={item.img} alt="" />

                  <div className="discount-badge absolute top-3 right-3 px-3">
                    <div className="bg-white p-[5px] rounded-full cursor-pointer mb-2">
                      <FaRegHeart className="text-base text-black" />
                    </div>

                    <div className="bg-white p-[5px] rounded-full cursor-pointer">
                      <IoEyeOutline className="text-base text-black" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-poppins font-medium text-base text-black">
                    {item.name}
                  </h3>

                  <p className="py-2 font-poppins font-medium text-base flex items-center gap-3">
                    <span className="text-[#DB4444]">${item.price}</span>
                    <del className="text-[rgba(0,0,0,0.5)]">
                      ${item.oldPrice}
                    </del>
                  </p>

                  {/* ⭐ RATING SECTION */}
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                    <span className="font-poppins font-semibold text-sm text-[rgba(0,0,0,0.5)] ps-1">
                      ({item.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* END GRID */}
        </div>
      </section>
    </>
  );
};

export default BestSelling;
