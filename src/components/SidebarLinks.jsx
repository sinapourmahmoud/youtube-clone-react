import React from "react";
import { NavLink } from "react-router-dom";
export default function SidebarLinks({ link }) {
  return (
    <div className="w-full flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:bg-[rgb(255,0,0)] rounded-3xl">
      {link.icon}
      <p className="text-white font-semibold">{link.name}</p>
    </div>
  );
}
