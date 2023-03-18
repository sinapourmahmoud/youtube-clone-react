import React, { useContext } from "react";
import { logo, categories } from "./../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import SidebarLinks from "./SidebarLinks";
import { mainContext } from "../contexts/mainContext";
export default function Sidebar() {
  let { activeLink, setActiveLink } = useContext(mainContext);
  return (
    <div className="flex flex-col gap-3 p-2 w-ful h-full border-r border-[#eee] ">
      <div className="flex items-center justify-between md:hidden">
        <img src={logo} alt="logo" className="w-[20%]  object-contain" />
        <span
          onClick={() => {
            setActiveLink((prev) => !prev);
          }}
        >
          <CloseIcon className="cursor-pointer text-white" />
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {categories.map((item, index) => (
          <SidebarLinks key={item.name} link={item} />
        ))}
      </div>
    </div>
  );
}
