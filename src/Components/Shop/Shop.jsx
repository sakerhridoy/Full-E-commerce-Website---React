import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { useShop } from '../../Context/ShopContext/ShopContext';

import fSales2 from '../../assets/images/fSales2.png';
import fSales3 from '../../assets/images/fSales3.png';
import shop3 from '../../assets/images/shop3.png';

/* ================= PRODUCTS ================= */
const products = [
  {
    id: 1,
    img: fSales2,
    dis: 35,
    name: 'AK-900 Wired Keyboard',
    dPrice: 960,
    mPrice: 1160,
    rating: 75,
  },
  {
    id: 2,
    img: fSales3,
    dis: 30,
    name: 'IPS LCD Gaming Monitor',
    dPrice: 370,
    mPrice: 400,
    rating: 99,
  },
  {
    id: 3,
    img: shop3,
    dis: 0,
    name: 'RGB Liquid CPU Cooler',
    dPrice: 160,
    mPrice: 170,
    rating: 65,
  },
];

/* ================= COLORS ================= */
const colors = [
  { id: 1, name: 'Color 1', value: '#000000' },
  { id: 2, name: 'Color 2', value: '#DB4444' },
  { id: 3, name: 'Color 3', value: '#00FF66' },
];

const Shop = () => {
  const { addToCart, addToWishlist } = useShop();
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <section className="pb-[104px]">
      <div className="container">
        {/* BREADCRUMB */}
        <p className="text-sm font-poppins font-normal text-black/50 pb-[50px] pt-20">
          <Link to="/">Home</Link> / <span className="text-black">Shop</span>
        </p>

        <div className="flex">
          {/* ================= SIDEBAR ================= */}
          <div className="w-[20%]">
            <h3 className="text-xl font-poppins font-bold pb-4 text-[#262626]">
              Shop by Category
            </h3>
            <ul className="space-y-4 text-black font-poppins font-normal text-base leading-6">
              {[
                'Women’s Fashion',
                'Men’s Fashion',
                'Electronics',
                'Home & Lifestyle',
                'Medicine',
                'Sports & Outdoor',
                'Baby’s & Toys',
                'Groceries & Pets',
                'Health & Beauty',
              ].map(item => (
                <li key={item} className="cursor-pointer hover:text-black">
                  {item}
                </li>
              ))}
            </ul>

            {/* SHOP BY COLOR */}
            <h3 className="text-xl font-poppins font-bold pb-4 text-[#262626] mt-10">
              Shop by Color
            </h3>
            <ul className="space-y-4">
              {colors.map(color => (
                <li
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`flex items-center gap-3 cursor-pointer ${
                    selectedColor === color.id
                      ? 'text-black font-medium'
                      : 'text-black/60'
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedColor === color.id
                        ? 'ring-2 ring-black ring-offset-2'
                        : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                  ></span>
                  {color.name}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="w-[80%]">
            <div className="flex justify-end items-center mb-[30px]">
              <span className="font-poppins text-base mr-3 font-normal leading-6 text-black">Show :</span>
              <select className="shadow-sm px-10 py-[2.5px] rounded-[5px] outline-0 appearance-none">
                <option>6</option>
                <option>9</option>
                <option>12</option>
              </select>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-8">
              {products.map(item => (
                <div key={item.id} className="group">
                  {/* IMAGE */}
                  <div className="bg-[#F5F5F5] py-10 relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="mx-auto w-40"
                    />

                    {/* DISCOUNT */}
                    {item.dis > 0 && (
                      <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                        -{item.dis}%
                      </span>
                    )}

                    {/* ICONS */}
                    <div className="absolute top-3 right-3 space-y-2 flex flex-col">
                      <button
                        onClick={() => addToWishlist(item)}
                        className="bg-white p-2 rounded-full hover:text-red-500 transition"
                      >
                        <FaRegHeart />
                      </button>
                      <button className="bg-white p-2 rounded-full hover:text-black transition">
                        <IoEyeOutline />
                      </button>
                    </div>

                    {/* ADD TO CART */}
                    <div
                      onClick={() => addToCart(item)}
                      className="absolute left-0 bottom-[-45px] w-full bg-black text-white text-center py-2
                    cursor-pointer opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all"
                    >
                      Add To Cart
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="pt-4">
                    <h4 className="font-medium">{item.name}</h4>

                    <p className="flex gap-3 py-2">
                      <span className="text-[#DB4444] font-medium">
                        ${item.dPrice}
                      </span>
                      <del className="text-black/50">${item.mPrice}</del>
                    </p>

                    {/* RATING */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#FFAD33]" />
                      ))}
                      <span className="text-sm text-black/50">
                        ({item.rating})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
