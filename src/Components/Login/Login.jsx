import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import signup from '../../assets/Images/signup.png'

const Login = () => {
  return (
    <section className="relative pt-[76px] pb-[140px]">
      {/* LEFT IMAGE */}
      <div className="hidden w-1/2 md:flex items-center justify-center rounded-sm">
        <img src={signup} alt="" className="w-full h-full" />
      </div>

      {/* RIGHT FORM */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="container h-full">
          <div className="flex items-center justify-end px-6 h-full">
            <div className="w-full max-w-md">
              <h2 className="font-inter font-medium text-4xl text-black leading-8 tracking-[4%] pb-6">
                Log in to Exclusive
              </h2>
              <p className="font-poppins font-normal text-base leading-6 text-black pb-12">
                Enter your details below
              </p>

              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full border-b border-[rgba(0,0,0,0.5) focus:outline-none font-poppins font-normal text-base leading-6 text-[rgba(0,0,0,0.4)]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-[rgba(0,0,0,0.5) focus:outline-none font-poppins font-normal text-base leading-6 text-[rgba(0,0,0,0.4)]"
                />
                <div className="flex justify-between items-center gap-[87px]">
                  <button
                    type="submit"
                    className="w-1/2 bg-[#DB4444] hover:bg-red-600 py-4 rounded-sm transition font-poppins font-medium text-base leading-6 text-[#fafafa]"
                  >
                    Log in
                  </button>
                  <a
                    href=""
                    className="w-1/2 text-[#DB4444] font-poppins font-normal text-base leading-6"
                  >
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
