import React from "react";
import { MdEmail } from "react-icons/md";
import logo1 from "../../../assets/tunipay-logo/Logo1.png";
import logo2 from "../../../assets/tunipay-logo/Logo2.png";
import mastercard from "../../../assets/footer-icons/mastercard.png";
import amex from "../../../assets/footer-icons/amex.png";
import vector from "../../../assets/footer-icons/Vector.png";
import paypal from "../../../assets/footer-icons/paypal.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#8974F7] to-[#D25BF7] py-3 w-full ">
        <div className="flex md:flex-row flex-col gap-y-4 justify-between items-center max-w-[1400px] mx-auto ">
          <div className="flex items-center justify-center gap-x-2 ">
            <MdEmail size={33} className="text-white" />
            <div className="text-[26px] text-white font-semibold">
              Sign Up For Newsletter
            </div>
          </div>
          <div className="text-[20px] text-white font-semibold">
            Shopping First For Coupon $25 Receive And...
          </div>
          <div class="flex items-center justify-center  bg-red-400 ">
            <form>
              <div class="flex  p-0.5 overflow-hidden border bg-white rounded-lg flex-row ">
                <input
                  class="px-8  text-gray-700 placeholder-gray-500 bg-white outline-none "
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#2D56FF] rounded-md hover:bg-gray-600  focus:outline-none">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600 flex gap-x-2">
                <img src={logo1} alt="" className=" " />
                <img src={logo2} alt="" className=" " />
              </div>
              <p className="mt-4 max-w-xs text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
              <ul className="mt-8 flex gap-6">
                <li className="p-2 bg-[#337FFF] text-white rounded-full">
                  <FaFacebook className="text-2xl" />
                </li>
                <li className="p-2 bg-[#FF0000] text-white rounded-full">
                  <FaYoutube className=" text-2xl" />
                </li>
                <li className="p-2 bg-[#F75274] text-white rounded-full">
                  <FaInstagram className="text-2xl" />
                </li>
                <li className="p-2  bg-[#33CCFF] text-white rounded-full">
                  <FaTwitter className=" text-2xl" />
                </li>
                <li className="p-2 bg-[#FF0000]  text-white rounded-full">
                  <FaFacebook className=" text-2xl" />
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Products</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Prices Drop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      New Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Best Sellers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Our Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Legal Notice
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Secure Payment
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Download App</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Comming Soon
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Comming Soon
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Comming Soon
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Store Infomation</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex gap-x-2 items-center">
                    <div>
                      <CiLocationOn />
                    </div>
                    <div>Location</div>
                  </li>
                  <li className="flex gap-x-2 items-center">
                    <div>
                      <LuPhone />
                    </div>
                    <div>+001 476 814</div>
                  </li>
                  <li className="flex gap-x-2 items-center">
                    <div>
                      <MdOutlineMail />
                    </div>
                    <div>TuniPAY@gmail.com</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="h-1 " />

          <div className="flex items-center">
            <div className="flex-1 ">
              <ul className="flex justify-start items-center gap-x-2">
                <li>
                  <img src={mastercard} alt="" />
                </li>
                <li>
                  <img src={amex} alt="" />
                </li>
                <li>
                  <img src={vector} alt="" />
                </li>
                <li>
                  <img src={paypal} alt="" />
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs flex-1 text-gray-500 ">
                TuniPAY © 2024. Demo Store. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
