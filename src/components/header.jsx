"use client";

import Image from "next/image";
import { FaMoon, FaBell } from "react-icons/fa"; 

const Header = () => {
  return (
    <header className="bg-white flex justify-end items-center px-6 py-3  transition-all w-[300px] ml-auto rounded-lg">
      <div className="flex items-center space-x-6">
        <FaMoon className="text-[#205088] dark:text-blue text-xl cursor-pointer" />
        <FaBell className="text-[#205088] dark:text-blue text-xl cursor-pointer" />

        <Image
          src="/user.jpg"
          alt="Usuario"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-blue dark:border-gray-600"
        />
      </div>
    </header>
  );
};

export default Header;
