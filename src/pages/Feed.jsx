import React, { useContext } from "react";
import { mainContext } from "../contexts/mainContext";

import Sidebar from "./../components/Sidebar";
export default function Feed() {
  let { activeLink, setActiveLink } = useContext(mainContext);
  return (
    <div className="relative flex">
      <div
        className={`fixed md:relative top-0 bg-black z-40 left-0 bottom-0 h-screen md:w-60 ${
          activeLink ? "w-60" : "w-0"
        }`}
      >
        <Sidebar />
      </div>
    </div>
  );
}
