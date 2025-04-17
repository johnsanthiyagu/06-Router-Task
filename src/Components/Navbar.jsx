import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Navbar = ({ onSearch }) => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav className="fixed w-screen top-0 flex justify-around items-center bg-blue-400 text-white p-2">
      <input
        type="text"
        placeholder="Search Product"
        className="p-2 text-black font-bold border rounded w-1/2 bg-white"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="relative hidden md:flex justify-center items-center gap-6">
        <Link to="/product" className="text-lg font-semibold cursor-pointer">
          Products
        </Link>
        <Link to="/cart" className="text-lg font-semibold cursor-pointer">
          <FaShoppingCart />
          <p className=" absolute -top-1 -right-3 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center text-xs">
            {cartItems.length}
          </p>
        </Link>
      </div>
      {/* mobile view menu */}
      <div
        className={`sm:hidden flex cursor-pointer text-2xl font-extrabold`}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <IoMenu />
        <div
          className={`fixed top-0 left-0 bg-blue-400 w-screen h-screen  text-2xl font-extrabold z-10 ${
            menuOpen ? "hidden" : ""
          }`}
        >
          <IoClose className=" absolute right-11 top-4 text-2xl font-extrabold" />
          <div className="flex justify-center items-center flex-col gap-10 h-screen w-screen">
            <Link
              to="/product"
              className="text-lg font-semibold cursor-pointer"
            >
              Products
            </Link>
            <div className="relative flex">
              <Link to="/cart" className="text-lg font-semibold cursor-pointer">
                <FaShoppingCart />
                <p className=" absolute -top-2 -right-3 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center text-xs">
                  {cartItems.length}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* floating cart */}
      <Link to="/cart">
        <div className="fixed md:hidden bg-blue-400 p-3 rounded-full text-xl flex justify-center items-center right-8 bottom-14 cursor-pointer hover:bg-blue-500 shadow-2xl">
          <FaShoppingCart />
          <p className=" absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center text-xs ">
            {cartItems.length}
          </p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
