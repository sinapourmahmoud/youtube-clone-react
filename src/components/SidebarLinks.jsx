import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { mainContext } from "../contexts/mainContext";

export default function SidebarLinks({ link }) {
  let { category, setCategory } = useContext(mainContext);
  return (
    <div
      onClick={() => {
        setCategory(link.name);
      }}
      className={`w-full cursor-pointer flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:bg-[rgb(255,0,0)] rounded-3xl ${
        category == link.name ? "bg-[rgb(255,0,0)]" : ""
      }`}
    >
      {link.icon}
      <p className="text-white font-semibold">{link.name}</p>
    </div>
  );
}
