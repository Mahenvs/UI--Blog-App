import React from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { PencilIcon } from "./Utility/Icons";

const navList = [
  
  {
    name: (
      <div className="flex  items-center gap-2">
      <PencilIcon></PencilIcon>  {"write"}
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
    to: "/login",
  },
  {
    name: "Get Started",
    to: "/login",
  },
];
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="h-24 bg-blue text-white/90">
      <section className="flex justify-between items-center h-full p-8">
        <div className="">
          <Header variant="h1" className="cursor-pointer text-white/95"
          onClick={()=>{
            navigate("/posts")
          }}>Logo</Header>
        </div>
        <div className="flex gap-8 items-center ">
          {navList.map((navLink,index) => {
            return <NavLink key={index} to={navLink.to}>{navLink.name}</NavLink>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
