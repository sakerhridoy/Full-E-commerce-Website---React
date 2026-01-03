import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbLogout2 } from 'react-icons/tb';
import {
  LuUser,
  LuShoppingBag,
  LuStar,
} from 'react-icons/lu';
import logo from '../../assets/Images/logo.png';
import { Link, useLocation } from 'react-router';
const Navbar = () => {
  const location = useLocation();
  const [showAcc, setShowAcc] = useState(false);
   const hideIcons =
     location.pathname === '/signup' || location.pathname === '/login';
  return (
    <>
      <nav className="pb-4 border-b-[0.5px] border-[rgba(0,0,0,0.25)]">
        <div className="bg-black py-3">
          <div className="container">
            <div className="flex gap-[179px] justify-end items-center">
              <div className="left">
                <p className="font-poppins font-normal text-sm text-[#FAFAFA] leading-[21px]">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                  <Link to="/shop" className="underline leading-6 font-semibold ps-2">
                    ShopNow
                  </Link>
                </p>
              </div>
              <div className="flex justify-end">
                <div className="relative w-22">
                  <select className="font-poppins font-normal text-md text-[#FAFAFA] leading-[21px] border-none bg-black outline-none appearance-none pr-4 cursor-pointer">
                    <option>English</option> <option>Bangla</option>{' '}
                  </select>
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown className="text-white text-2xl font-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative">
          <div className="flex justify-between gap-[126px] mt-10">
            <div className="flex gap-38 justify-between items-center">
              <div className="w-[118px]">
                <Link to="/"><img src={logo} alt="logo" className="w-full" /></Link>
              </div>
              <div className="menu">
                <ul className="flex gap-12">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact flex items-center gap-6">
              <form className="w-full">
                <div className="bg-[#F5F5F5] rounded-sm flex items-center py-2.5 ps-5 w-[243px]">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full min-w-0 text-black font-poppins font-normal text-xs leading-[18px] outline-none bg-transparent px-2"
                  />
                  <div className="py-[3px] pr-3 cursor-pointer">
                    <FiSearch className="text-black text-base" />
                  </div>
                </div>
              </form>
              {!hideIcons && (
                <div className="flex items-center gap-4 text-black text-xl">
                  <div className="heart">
                    <Link to="/wishlist">
                      <FaRegHeart />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#DB4444] text-white text-xs font-poppins font-normal leading-4 flex items-center justify-center absolute -top-2 -right-1.5">
                      <p>2</p>
                    </div>
                   <Link to="/cart"><IoCartOutline className="text-xl" /></Link>
                  </div>
                  <div
                    onClick={() => setShowAcc(!showAcc)}
                    className="w-8 h-8 rounded-full bg-[#DB4444] flex items-center justify-center text-white text-xl cursor-pointer"
                  >
                    <LuUser />
                  </div>
                  {showAcc && (
                    <div className="absolute right-0 top-12 w-[225px] bg-[#7D6C8C]/60 backdrop-blur-md rounded-sm shadow-lg px-5 py-4 z-50">
                      <ul className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] space-y-[18px]">
                        <li>
                          <Link
                            to="/myAccount"
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <LuUser className="text-2xl" /> Manage My Account
                          </Link>
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer">
                          <LuShoppingBag className="text-2xl" /> My Order
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer">
                          <AiOutlineCloseCircle className="text-2xl" /> My
                          Cancellations
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer">
                          <LuStar className="text-2xl" /> My Reviews
                        </li>
                        <li>
                          <Link
                            to="/signup"
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <TbLogout2 className="text-2xl" /> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
