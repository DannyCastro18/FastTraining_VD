"use client";
import Link from "next/link";
import { FaHome, FaCalendarAlt, FaUserEdit } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white w-20 h-full fixed top-0 m-4 border-r-3 border-gray-700 shadow-[6px_0_18px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:shadow-[10px_0_25px_rgba(0,0,0,0.7)] flex flex-col items-center py-7 transition-all rounded-2xl">
      <div className="flex flex-col items-center space-y-9 mt-4">
        <Link href="/secure/entrenador/inicio">
          <FaHome className="text-[#205088] dark:text-blue text-3xl transition-colors" />
        </Link>
        <Link href="/secure/entrenador/creacionPlan/page">
          <FaCalendarAlt className="text-[#205088] dark:text-blue text-3xl transition-colors" />
        </Link>
        <Link href="/perfil">
          <FaUserEdit className="text-[#205088] dark:text-blue text-3xl transition-colors" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
