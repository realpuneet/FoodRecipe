import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/favorite", label: "Favorite" },
  { to: "/about", label: "About" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleSidebar = () => setOpen((prev) => !prev);
  const closeSidebar = () => setOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-xl">
          Tasty<span className="text-[#ffa319]">Trove</span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center font-normal text-base ml-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#DBDFD0] px-4 py-2 rounded-full font-semibold"
                    : "hover:bg-gray-100 px-4 py-2 rounded-full transition"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/login"
            className="border border-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-[#ffa319] hover:text-white transition"
          >
            Login
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100 transition"
          onClick={handleSidebar}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar Drawer */}
        <aside
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-bold text-xl">
              Tasty<span className="text-[#ffa319]">Trove</span>
            </span>
            <button
              onClick={closeSidebar}
              className="p-2 rounded hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-2 mt-6 px-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#DBDFD0] px-4 py-2 rounded-full font-semibold block"
                      : "hover:bg-gray-100 px-4 py-2 rounded-full block transition"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-6 mt-8">
            <NavLink
              to="/login"
              onClick={closeSidebar}
              className="border border-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-[#ffa319] hover:text-white transition block text-center"
            >
              Login
            </NavLink>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Nav;