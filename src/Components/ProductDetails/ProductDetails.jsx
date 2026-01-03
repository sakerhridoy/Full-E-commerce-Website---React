import React, { useState } from 'react';
import { Link, useParams } from 'react-router'; 
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import { useShop } from '../../Context/ShopContext/ShopContext';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsArrowRepeat } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';

import fSales1 from '../../assets/images/fSales1.png';
import fSales2 from '../../assets/images/fSales2.png';
import fSales3 from '../../assets/images/fSales3.png';
import shop3 from '../../assets/images/shop3.png';
import { details } from 'framer-motion/client';

const products = [
  {
    id: 1,
    img: fSales1,
    name: 'HAVIT HV-G92 Gamepad',
    dis: 40,
    dPrice: 120,
    mPrice: 160,
    rating: 88,
    desc: 'High quality mechanical keyboard for gamers.',
    details:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 2,
    img: fSales3,
    name: 'IPS LCD Gaming Monitor',
    dis: 35,
    dPrice: 370,
    mPrice: 400,
    rating: 99,
    desc: 'Ultra smooth IPS gaming monitor with 144Hz.',
    details:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 3,
    img: shop3,
    name: 'RGB Liquid CPU Cooler',
    dis: 30,
    dPrice: 160,
    mPrice: 170,
    rating: 65,
    desc: 'Advanced RGB liquid cooling solution.',
    details:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 4,
    img: fSales2,
    name: 'AK-900 Wired Keyboard',
    dis: 0,
    dPrice: 960,
    mPrice: 1160,
    rating: 75,
    desc: 'High quality mechanical keyboard for gamers.',
    details:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useShop();
 const [quantity, setQuantity] = useState(2);
  const [mainImage, setMainImage] = useState(null); // For thumbnail switching

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-40 text-center">
        <p className="text-2xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const currentMainImage = mainImage || product.img;
  const thumbnails = [product.img, product.img, product.img, product.img];

  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <section className="pb-[140px]">
      <div className="container max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 py-20">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-black transition">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link to="/account" className="hover:text-black transition">
            Account
          </Link>
          <span className="mx-2">/</span>
          <Link to="/gaming" className="hover:text-black transition">
            Gaming
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[70px]">
          <div className="lg:col-span-7 flex gap-6">
            <div className="flex flex-col gap-4">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(thumb)}
                  className={`bg-[#F5F5F5] rounded-sm px-4 py-6 cursor-pointer transition-all ${
                    currentMainImage === thumb
                      ? 'opacity-50'
                      : 'border-transparent hover:opacity-70'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Havic HV G-92 Gamepad thumbnail ${index + 1}`}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#F5F5F5] rounded-sm flex items-center justify-center p-10">
              <img
                src={currentMainImage}
                alt={product.name}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Product Details - Right Side */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h1 className="font-inter font-semibold text-2xl leading-6 tracking-[3%] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex text-[#FFAD33]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-black/50 font-poppins font-normal leading-[21px] text-sm">
                ({product.rating} Reviews)
              </span>
              <span className="text-[#00FF66] text-sm font-poppins font-normal leading-[21px]">
                | In Stock
              </span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-inter font-normal leading-6 text-black">
                ${product.dPrice}
              </span>
              {product.mPrice > product.dPrice && (
                <del className="text-gray-500 ml-3 text-xl">
                  ${product.mPrice}
                </del>
              )}
            </div>

            {/* Description */}
            <p className="text-black font-poppins font-normal mb-2 border-b pb-2">
              {product.details}
            </p>

            {/* Colours */}
            <div className="flex items-center gap-6 mb-4">
              <p className="text-black font-inter text-xl leading-5 font-normal">
                Colours:
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setSelectedColor('blue')}
                  className={`w-5 h-5 rounded-full border-3 transition ${
                    selectedColor === 'blue' ? 'border-black ' : 'border-none'
                  } bg-[#A0BCE0]`}
                />
                <button
                  onClick={() => setSelectedColor('red')}
                  className={`w-5 h-5 rounded-full border-3 transition ${
                    selectedColor === 'red' ? 'border-black ' : 'border-none'
                  } bg-[#E07575]`}
                />
              </div>
            </div>

            {/* Size */}
            <div className="mb-6 flex items-center gap-6">
              <p className="text-black font-inter text-xl leading-5 font-normal">
                Size:
              </p>
              <div className="flex gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-sm border text-sm font-poppins font-medium transition ${
                      selectedSize === size
                        ? 'bg-[#DB4444] text-white border-[#DB4444]'
                        : 'bg-white text-black border-black/50 hover:border-black/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6">
              <div className="flex items-center rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-2 text-xl hover:bg-[#DB4444] hover:text-white transition rounded-l-sm border border-black/50 hover:border-0"
                >
                  <FiMinus className="w-5 h-5" />
                </button>
                <span className="px-[34px] py-1 text-lg font-poppins border-t border-b border-black/50 font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-2 text-xl hover:bg-[#DB4444] hover:text-white transition rounded-r-sm border border-black/50 hover:border-0"
                >
                  <FaPlus className="w-5 h-5" />
                </button>
              </div>

              <button className="bg-[#DB4444] font-poppins text-base text-white px-12 py-2.5 rounded-md font-medium hover:bg-[#db4444]/90 transition">
                Buy Now
              </button>

              <button className="border border-black/50 p-2 rounded-sm hover:bg-[#DB4444] hover:border-[#DB4444] transition hover:text-white">
                <FaRegHeart className="w-6 h-6" />
              </button>
            </div>
            {/* Delivery & Return Boxes */}
            <div className="mt-8 border border-black/50 rounded-sm divide-y divide-black/50">
              <div className="flex items-center gap-4 px-4 pt-6 pb-4">
                <TbTruckDelivery className="w-10 h-10 text-black" />
                <div>
                  <p className="font-medium text-black font-poppins text-base leading-6">
                    Free Delivery
                  </p>
                  <p className="font-medium text-black font-poppins text-xs leading-[21px]">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 pb-4 pt-6">
                <BsArrowRepeat className="w-10 h-10 text-black" />
                <div>
                  <p className="font-medium text-black font-poppins text-base leading-6">
                    Return Delivery
                  </p>
                  <p className="font-medium text-black font-poppins text-xs leading-[21px] pt-2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[150px] pb-[70px]">
          <div className="relative after:absolute after:content-[''] after:w-5 after:h-full after:bg-[#DB4444] after:left-0 after:top-0 after:rounded-sm ps-9">
            <h4 className="text-xl font-normal font-poppins leading-10 text-[#db4444]">
              Related Item
            </h4>
          </div>
        </div>
        <div className="relProduct">
          <div className="col-span-9 grid grid-cols-4 gap-[30px]">
            {products.map(item => (
              <div key={item.id} className="group">
                {/* IMAGE */}
                <div className="bg-[#F5F5F5] py-10 relative overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="mx-auto w-40 cursor-pointer"
                    />
                  </Link>

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
                  <Link to={`/product/${item.id}`} className="font-medium">
                    {item.name}
                  </Link>

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
    </section>
  );
};

export default ProductDetails;
