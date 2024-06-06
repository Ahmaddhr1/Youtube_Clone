import React from "react";

import { categories } from "../utils/categories.jsx";
import { Link } from "react-router-dom";
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div className="flex flex-col gap-2 w-fit pr-4 mr-5 border-r border-my-gray">
      {categories.map((category) => (
        <Link onClick={()=>setSelectedCategory(category.name)} className={`flex items-start gap-4 justify-left px-4 py-2 hover:bg-my-gray rounded-lg duration-300 ${category.name === selectedCategory ? "bg-gradient-to-br from-orange-500 via-pink-700 to-blue-400":'bg-transparent'}`} key={category.name}>
          <span className="flex items-center justify-center text-xl">{category.icon}</span>
          <span className="flex items-center">{category.name}</span>
        </Link>
      ))}
    </div>
   
   
  );
};

export default Sidebar;
