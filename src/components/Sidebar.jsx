


"use client";
import "../styles/globals.css"; // Importa Tailwind CSS

import Link from "next/link";
import { FaHome, FaUsers, FaFolder, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-white dark:bg-gray-600 w-18 h-screen border-r-3 border-gray-700 shadow-[6px_0_18px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:shadow-[10px_0_25px_rgba(0,0,0,0.7)] flex flex-col items-center py-7 transition-all">
      <nav className="flex flex-col items-center space-y-9 mt-4">
        <Link href="/inicio">
          <FaHome className="text-[#205088] dark:text-white text-2xl transition-colors" />
        </Link>
        <Link href="/users">
          <FaUsers className="text-[#205088] dark:text-white text-2xl transition-colors" />
        </Link>
        <Link href="/files">
          <FaFolder className="text-[#205088] dark:text-white text-2xl transition-colors" />
        </Link>
        <Link href="/">
          <FaCalendarAlt className="text-[#205088] dark:text-white text-2xl transition-colors" />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
