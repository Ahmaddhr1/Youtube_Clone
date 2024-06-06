import React from "react";

import { categories } from "../utils/categories.jsx";
import { Link } from "react-router-dom";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex md:flex-col gap-2 md:w-fit pr-4 border-r py-3 md:py-0 mt-[-10px] md:mt-0 border-my-gray fixed z-[99] bg-my-black overflow-x-scroll md:overflow-x-hidden w-full ">
      {categories.map((category) => (
        <Link
          onClick={() => setSelectedCategory(category.name)}
          className={`flex items-start gap-4 justify-left md:px-4 md:py-2 px-2 py-1 bg-my-gray  md:bg-transparent md:hover:bg-my-gray rounded-lg duration-300 ${
            category.name === selectedCategory
              ? "bg-gradient-to-br from-orange-500 via-pink-700 to-blue-400"
              : "bg-transparent"
          }`}
          key={category.name}
        >
          <span className="flex items-center justify-center md:text-xl text-lg">
            {category.icon}
          </span>
          <span className="flex items-center ">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
