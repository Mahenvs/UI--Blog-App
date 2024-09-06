import React, { useEffect } from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { PencilIcon } from "./Utility/Icons";
import { useStore } from "@/store";
import DisplayAvatar from "./DisplayAvatar";
import { ApiLogout } from "@/API/ApiLogout";

const Navbar = () => {
  const { isAuthenticated } = useStore();
  const navigate = useNavigate();

  const navList = [
    {
      name: (
        <div className="flex items-center gap-2">
          <PencilIcon /> Write
        </div>
      ),
      to: "/write",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      ),
      to: "",
    },
    {
      name: !isAuthenticated && "Get Started",
      to: "/login",
    },
  ];

  const {logout} = useStore()

  const logoutHandler = () =>{
    ApiLogout()  
    // Updating store
    logout()
  }
  return (
    <div className="h-24 bg-blue text-white/90">
      <section className="flex justify-between items-center h-full p-8">
        <Header
          variant="h1"
          className="cursor-pointer text-white/95"
          onClick={() => navigate("/posts")}
        >
          Blogger.
        </Header>
        <div className="flex gap-8 items-center">
          {navList.map((navLink, index) => (
            <NavLink key={index} to={navLink.to}>
              {navLink.name}
            </NavLink>
          ))}
          {isAuthenticated && (
            <span onClick={logoutHandler}>
              <DisplayAvatar username={"sd"} />{" "}
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
