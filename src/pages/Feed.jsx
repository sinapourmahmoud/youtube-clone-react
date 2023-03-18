import React, { useContext, useEffect } from "react";
import { mainContext } from "../contexts/mainContext";
import Sidebar from "./../components/Sidebar";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
export default function Feed() {
  let { category } = useContext(mainContext);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${category}`)
      .then((res) => {
        console.log(res.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);
  let { activeLink, setActiveLink } = useContext(mainContext);
  return (
    <div className="relative flex">
      <div
        className={`fixed md:relative top-0 bg-black  z-40 left-0 bottom-0 md:block h-screen md:w-60 ${
          activeLink ? "w-60" : "w-0 hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex-2 h-screen w-full bg-black text-white py-3 px-2 md:px-4">
        <p className="text-3xl font-bold">
          New <span className="text-[rgb(255,0,0)]">Videos</span>
        </p>
      </div>
    </div>
  );
}
