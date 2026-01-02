import React from 'react';
import { ImBin } from 'react-icons/im';
import { IoEyeOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';

import whish1 from '../../assets/images/wish1.png';
import whish2 from '../../assets/images/wish2.png';
import whish3 from '../../assets/images/wish3.png';
import whish4 from '../../assets/images/wish4.png';
import foryou1 from '../../assets/images/foryou1.png';
import foryou2 from '../../assets/images/foryou2.png';
import foryou3 from '../../assets/images/foryou3.png';
import foryou4 from '../../assets/images/foryou4.png';

/* ================= PRODUCTS ================= */
const products = [
  {
    id: 1,
    img: whish1,
    dis: 35,
    name: 'Gucci duffle bag',
    dPrice: 960,
    mPrice: 1160,
  },
  {
    id: 2,
    img: whish2,
    dis: 0,
    name: 'RGB liquid CPU Cooler',
    dPrice: 0,
    mPrice: 1960,
  },
  {
    id: 3,
    img: whish3,
    dis: 0,
    name: 'GP11 Shooter USB Gamepad',
    dPrice: 0,
    mPrice: 550,
  },
  {
    id: 4,
    img: whish4,
    dis: 0,
    name: 'Quilted Satin Jacket',
    dPrice: 0,
    mPrice: 750,
  },
];
const forYou = [
  {
    id: 1,
    img: foryou1,
    dis: 35,
    name: 'Gucci duffle bag',
    dPrice: 960,
    mPrice: 1160,
    rating: 65,
    arrival: 'Old',
  },
  {
    id: 2,
    img: foryou2,
    dis: 0,
    name: 'RGB liquid CPU Cooler',
    dPrice: 0,
    mPrice: 1960,
    rating: 65,
    arrival: 'Old',
  },
  {
    id: 3,
    img: foryou3,
    dis: 0,
    name: 'GP11 Shooter USB Gamepad',
    dPrice: 0,
    mPrice: 550,
    rating: 65,
    arrival: 'New',
  },
  {
    id: 4,
    img: foryou4,
    dis: 0,
    name: 'Quilted Satin Jacket',
    dPrice: 0,
    mPrice: 750,
    rating: 65,
    arrival: 'Old',
  },
];

const WishList = () => {
  return (
    <section className="pt-[95px] pb-[140px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[75px]">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-normal font-poppins leading-6 text-black">
              My WishList
            </h2>
            <p className="text-xl font-normal font-poppins leading-6 text-black">
              ({products.length})
            </p>
          </div>
          <button className="px-12 py-4 border border-black/50 font-poppins font-medium text-base leading-6 bg-transparent rounded-sm hover:bg-black/10 hover:border-black/10 duration-300">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {products.map(item => (
            <div key={item.id} className="group">
              {/* Image Box */}
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                />

                {/* Discount */}
                {item.dis > 0 && (
                  <span className="absolute top-3 left-3 bg-[#DB4444] px-3 py-1 rounded-sm text-xs text-white">
                    -{item.dis}%
                  </span>
                )}

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="bg-white p-1.5 rounded-full hover:bg-black/10 duration-200">
                    <ImBin />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="absolute left-0 w-full bg-black text-white text-sm py-2
                   bottom-0 opacity-100 transition-all duration-300"
                >
                  Add To Cart
                </button>
              </div>

              {/* Details */}
              <div className="pt-4">
                <h3 className="text-base font-medium">{item.name}</h3>

                <p className="py-2  font-medium">
                  {item.dPrice > 0 ? (
                    <div className="flex gap-3">
                      <span className="text-[#DB4444]">${item.dPrice}</span>
                      <del className="text-black/50">${item.mPrice}</del>
                    </div>
                  ) : (
                    <span className="text-[#DB4444]">${item.mPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[95px] mb-[75px]">
          <div className="flex items-center gap-2">
            <div className="relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
              <h4 className="text-xl font-normal font-poppins leading-10 text-black">
                Just For You
              </h4>
            </div>
          </div>
          <button className="px-12 py-4 border border-black/50 font-poppins font-medium text-base leading-6 bg-transparent rounded-sm hover:bg-black/10 hover:border-black/10 duration-300">
            See All
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {forYou.map(item => (
            <div key={item.id} className="group">
              {/* Image Box */}
              <div className="bg-[#F5F5F5] py-[35px] rounded-sm relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto w-[172px] transition-transform duration-300 group-hover:scale-90"
                />

                {/* Discount */}
                {item.dis > 0 && (
                  <span className="absolute top-3 left-3 bg-[#DB4444] px-3 py-1 rounded-sm text-xs text-white">
                    -{item.dis}%
                  </span>
                )}
                {item.arrival === 'New' && (
                  <span className="absolute top-3 left-3 bg-[#00FF66] px-3 py-1 rounded-sm text-xs text-white">
                    {item.arrival}
                  </span>
                )}
                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="bg-white p-1.5 rounded-full hover:bg-black/10 duration-200">
                    <IoEyeOutline />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="absolute left-0 w-full bg-black text-white text-sm py-2
                   bottom-0 opacity-100 transition-all duration-300"
                >
                  Add To Cart
                </button>
              </div>

              {/* Details */}
              <div className="pt-4">
                <h3 className="text-base font-medium">{item.name}</h3>

                <p className="py-2  font-medium">
                  {item.dPrice > 0 ? (
                    <div className="flex gap-3">
                      <span className="text-[#DB4444]">${item.dPrice}</span>
                      <del className="text-black/50">${item.mPrice}</del>
                    </div>
                  ) : (
                    <span className="text-[#DB4444]">${item.mPrice}</span>
                  )}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFAD33]" />
                  ))}
                  <span className="text-sm text-black/50 ps-1">
                    ({item.rating})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishList;
