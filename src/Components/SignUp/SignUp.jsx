import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import signup from '../../assets/Images/signup.png'
import { Link } from 'react-router';

const SignUp = () => {
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
                Create an account
              </h2>
              <p className="font-poppins font-normal text-base leading-6 text-black pb-12">
                Enter your details below
              </p>

              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-[rgba(0,0,0,0.5) focus:outline-none font-poppins font-normal text-base leading-6 text-[rgba(0,0,0,0.4)]"
                />
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
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full bg-[#DB4444] hover:bg-red-600 py-4 rounded-sm transition font-poppins font-medium text-base leading-6 text-[#fafafa]"
                  >
                    Create Account
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-transparent py-4 rounded-sm transition font-poppins font-medium text-base leading-6 text-black border border-[rgba(0,0,0,0.4)]"
                  >
                    <FcGoogle className="inline-block" /> Sign up with Google
                  </button>
                </div>
              </form>

              <p className="text-center font-poppins font-normal text-base leading-6 text-[rgba(0,0,0,0.7)] mt-[34px]">
                Already have account?{' '}
                <Link to='/login' className="font-medium cursor-pointer hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
