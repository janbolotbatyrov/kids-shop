import Link from "next/link";
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link href="/">
                <a className="flex-shrink-0 flex items-center text-white text-2xl ">
                  BabyStore
                </a>
              </Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div
                    href="#"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex "
                  >
                    <span>Каталог</span>
                    <MdArrowForwardIos className="text-xs mt-1.5 ml-2" />
                  </div>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    +996 000 00 00 00
                  </a>

                  <div className="flex w-80">
                    <input
                      type="text"
                      className="w-full rounded-md outline-none px-2 bg-gray-700 text-sm text-white"
                    />
                    <button className="text-white text-2xl rounded transition duration-200 hover:bg-gray-700 flex items-center justify-center w-12 ml-1 ">
                      <BiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" inset-y-0  right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative hover:bg-gray-700 text-2xl  p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="absolute text-sm top-0 right-0 bg-red-600 w-5 h-5 rounded-full">
                  2
                </span>
                <BiCartAlt />
              </button>

              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium flex "
              aria-current="page"
            >
              <span>Каталог</span>
              <MdArrowForwardIos className="text-xs mt-2 ml-2" />
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              +996 000 00 00 00
            </a>

            <div className="flex w-100 h-10">
              <input
                type="text"
                className="w-full rounded-md outline-none px-2 bg-gray-700 text-sm text-white"
              />
              <button className="text-white text-2xl rounded transition duration-200 hover:bg-gray-700 flex items-center justify-center w-12 ml-1 ">
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
