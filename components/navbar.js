import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/Monpasse.png" width={80} height={80} layout="intrinsic"/>
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              coc.py
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-gray-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 focus:bg-blue-700 hover:text-gray-300 ">
                MERCURY
              </a>
            </Link>
            <Link href="/venus">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 focus:bg-yellow-700 hover:text-gray-300 ">
                VENUS
              </a>
            </Link>
            <Link href="/earth">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-purple-600 focus:bg-purple-700 hover:text-gray-300 ">
                EARTH
              </a>
            </Link>
            <Link href="/mars">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 focus:bg-red-700 hover:text-gray-300 ">
                MARS
              </a>
            </Link>
            <Link href="/jupyter">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-600 focus:bg-indigo-600 hover:text-gray-300 ">
                JUPYTER
              </a>
            </Link>
            <Link href="/saturn">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 focus:bg-red-700 hover:text-gray-300 ">
                SATURN
              </a>
            </Link>
            <Link href="/uranus">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 focus:bg-green-700 hover:text-gray-300 ">
                URANUS
              </a>
            </Link>
            <Link href="/neptune">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 focus:bg-blue-700 hover:text-gray-300 ">
                NEPTUNE
              </a>
            </Link>
           
            
          </div>
        </div>
      </nav>
    </>
  );
}