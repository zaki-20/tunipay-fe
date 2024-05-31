import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoHomeOutline } from "react-icons/io5";
import { LuCopyPlus } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import logo1 from "../../../assets/tunipay-logo/Logo1.png";
import logo2 from "../../../assets/tunipay-logo/Logo2.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  console.log("user flag from navbar", user?.email)
  return (
    <Disclosure as="nav" className="bg-[#ffffff] w-full ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1500px]">
            <div className="relative flex h-16 items-center justify-between sm:mx-5  ">
              <Link to={"/"}>
                <div className="flex justify-center items-center">
                  <img className="block w-10" src={logo1} alt="img" />
                  <img className="block w-28" src={logo2} alt="img" />
                </div>
              </Link>

              <div className="hidden lg:ml-6 lg:block  ">
                <div className="flex spax-x-2 xl:space-x-4 ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div className="relative group px-3 py-2 font-medium text-sm 2xl:text-lg text-black cursor-pointer ">
                    Home 
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B275F7] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>

                  <div className="relative group px-3 py-2 font-medium text-sm 2xl:text-lg text-black cursor-pointer ">
                    Affiliate
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B275F7] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>

                  <div className="relative group px-3 py-2 font-medium text-sm 2xl:text-lg text-black cursor-pointer ">
                    Categorry
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B275F7] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>

                  <div className="relative group px-3 py-2 font-medium text-sm 2xl:text-lg text-black cursor-pointer ">
                    Collection
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B275F7] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>

                  <div className="relative group px-3 py-2 font-medium text-sm 2xl:text-lg text-black cursor-pointer ">
                    Contact
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B275F7] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-x-2 justify-center items-center sm:ml-0 ml-20">
                <div className="flex gap-x-2 mr-10 justify-center items-center">
                  <Link to={'/profile'}>
                  <span className="hidden sm:block"> search</span>
                  </Link>
                  <Link to="/cart" role="button" className="relative flex ">
                    <svg
                      className="flex-1 w-8 h-8 fill-current hover:scale-110 duration-200"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                    </svg>
                    <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                      {5}
                    </span>
                  </Link>
                </div>

                <div className="flex gap-x-1 sm:gap-x-4">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="text-xs sm:text-base px-2 sm:px-3 py-2 rounded-md border sm:border-2 border-[#2D56FF] bg-[#2D56FF] text-white"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link to={"/register"}>
                        <button className="text-xs sm:text-base px-2 sm:px-3 py-2 rounded-md border sm:border-2 border-[#2D56FF] bg-[#2D56FF] text-white">
                          register
                        </button>
                      </Link>
                      <Link to={"/register"}>
                        <button className="text-xs sm:text-base px-2 sm:px-3 py-2 rounded-md border sm:border-2 text-[#2D56FF] border-[#2D56FF] ">
                          Sign In
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-gray-200 mt-3  sm:py-4  py-1 pb-8  ">
            <div class=" absolute inset-0 left-0 top-0   w-[33%] h-[200px] rounded-full  blur-3xl  -z-10 "></div>

            <div className="space-y-3 flex flex-col  mx-10 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

              <Disclosure.Button
                as="a"
                className="block rounded-md px-6 py-4  text-base font-medium text-black hover:bg-gradient-to-r hover:from-[#ffffffc1] hover:to-[#2D56FF]  hover:opacity-60 duration-300"
              >
                <div className="flex gap-x-3">
                  <span>
                    {" "}
                    <LuCopyPlus className="" size={25} />
                  </span>
                  <span className="text-base">Services</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-6 py-4  text-base font-medium text-black  hover:bg-gradient-to-r hover:from-[#ffffffc1] hover:to-[#2D56FF] hover:opacity-60 duration-300"
              >
                <div className="flex gap-x-3">
                  <span>
                    {" "}
                    <MdAutoGraph className="" size={25} />
                  </span>
                  <span className="text-base">About Us</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-6 py-4  text-base font-medium text-black  hover:bg-gradient-to-r hover:from-[#ffffffc1] hover:to-[#2D56FF] hover:opacity-60 duration-300"
              >
                <div className="flex gap-x-3">
                  <span>
                    {" "}
                    <IoHomeOutline className="" size={25} />
                  </span>
                  <span className="text-base">Contact Us</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-6 py-4  text-base font-medium text-black  hover:bg-gradient-to-r hover:from-[#ffffffc1] hover:to-[#2D56FF]  hover:opacity-60 duration-300"
              >
                <div className="flex gap-x-3">
                  <span>
                    <GrContactInfo className="" size={25} />
                  </span>
                  <span className="text-base">Contact</span>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
