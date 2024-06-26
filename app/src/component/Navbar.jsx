import React, { useState } from "react";
import Logo from "../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const viewSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleOnBlurForSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate("/search/" + searchQuery);
      setSearchQuery("");
    }
  };
  return (
    <nav className="flex items-center justify-between w-full fixed bg-my-black h-[70px] padding border-b border-my-gray z-[100]">
      <Link to="/" className="flex items-center justify-center gap-3">
        <img src={Logo} alt="Logo" className="md:w-[30px] w-[25px]" />
        <h1 className=" md:text-xl text-lg font-semibold">Youtube | Ahmad</h1>
      </Link>
      <form
        onSubmit={handleSearchSubmit}
        className="md:flex hidden gap-3 bg-my-gray pt-3 pb-3 pl-5 pr-2 rounded-lg w-[300px]"
      >
        <button type="submit">
          <i className="fi fi-rr-search"></i>
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 h-full bg-transparent outline-none"
        />
      </form>
      <div
        onClick={viewSearch}
        className="relative w-[50px] h-[50px] bg-my-gray flex md:hidden items-center justify-center rounded-full "
      >
        <i className="fi fi-rr-search text-lg "></i>
      </div>
      <div
        className={`${
          isSearchOpen
            ? "w-full bg-my-black border-b border-my-gray  absolute top-full pr-5 pl-5 pt-2 pb-4  left-0 "
            : "hidden"
        }`}
      >
        <form
          onSubmit={handleSearchSubmit}
          onBlur={handleOnBlurForSearch}
          className="flex gap-3 bg-my-gray pt-3 pb-3 pl-5 pr-2 rounded-lg "
        >
          <button type="submit">
            <i className="fi fi-rr-search"></i>
          </button>
          <input
            autoFocus
            onBlur={handleOnBlurForSearch}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 h-full bg-transparent outline-none"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
