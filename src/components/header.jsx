"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Image from "next/image";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-[#121212] flex justify-end items-center px-6 py-3  transition-all">
      {/* Iconos a la derecha */}
      <div className="flex items-center space-x-4">
        {/* Botón de modo oscuro */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-xl text-[#205088] dark:text-gray-300" />
          )}
        </button>

        {/* Notificaciones */}
        <FaBell className="text-2xl text-[#205088] dark:text-gray-300 cursor-pointer" />

        {/* Imagen de usuario */}
        <Image
          src="/user.jpg"
          alt="Usuario"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-gray-300 dark:border-gray-600"
        />
      </div>
    </header>
  );
};

export default Header;
