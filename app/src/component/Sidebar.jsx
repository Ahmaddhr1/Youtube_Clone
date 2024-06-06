import React from "react";

import { categories } from "../utils/categories.jsx";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="min-h-[120vh] flex flex-col gap-2 w-fit pr-4 mr-5 border-r border-my-gray">
      {categories.map((category) => (
        <Link className="flex items-start gap-4 justify-left px-4 py-2 hover:bg-my-gray rounded-lg duration-300" key={category.name}>
          <span className="flex items-center justify-center text-xl">{category.icon}</span>
          <span className="flex items-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
