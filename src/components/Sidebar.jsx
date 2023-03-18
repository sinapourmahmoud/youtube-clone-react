import React from "react";
import { logo, categories } from "./../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import SidebarLinks from "./SidebarLinks";
export default function Sidebar() {
  return (
    <div className="flex flex-col gap-3 p-2 w-ful h-full border-r border-[#eee">
      <div className="flex items-center justify-between md:hidden">
        <img src={logo} alt="logo" className="w-[20%]  object-contain" />
        <CloseIcon className="cursor-pointer text-white" />
      </div>
      <div className="flex flex-col gap-3">
        {categories.map((item, index) => (
          <SidebarLinks key={item.name} link={item} />
        ))}
      </div>
    </div>
  );
}
