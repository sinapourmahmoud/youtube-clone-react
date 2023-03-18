import React, { useState } from "react";
import { logo } from "./../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  let [search, setSearch] = useState("");
  return (
    <div className="bg-black px-4 py-1  flex items-center  justify-between">
      <img src={logo} alt="logo" className="w-[50px] object-contain mt-2" />
      <form>
        <div className="flex items-center bg-white rounded-3xl">
          <input
            type="text"
            className=" outline-none border-0 h-full p-3 rounded-3xl"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link to={`/search/${search}`}>
            <SearchIcon sx={{ cursor: "pointer", marginRight: 1 }} />
          </Link>
        </div>
      </form>
    </div>
  );
}
