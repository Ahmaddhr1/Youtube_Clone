import React from "react";

import { categories } from "../utils/categories.jsx";
import { Link } from "react-router-dom";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex md:flex-col gap-2 md:w-fit pr-4 border-r py-3 md:py-0 mt-[-10px] md:mt-0 border-my-gray fixed z-[98] bg-my-black overflow-x-scroll md:overflow-x-hidden w-full md:h-[100%] ">
      {categories.map((category) => (
  
          <Link
            onClick={() => setSelectedCategory(category.name)}
            className={`flex md:items-start items-center w-fit md:w-full gap-4 justify-left md:px-4 md:py-2 px-2 py-1 bg-my-gray  md:bg-transparent md:hover:bg-my-gray rounded-lg duration-300 ${
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
      <p className="hidden md:block border-t border-my-gray mt-2 pt-4">Created by <a className="underline text-blue-600" href="https://linkedin.com/in/Ahmaddhr1" target="_blank">Ahmad Daher</a></p>
    </div>
  );
};

export default Sidebar;
