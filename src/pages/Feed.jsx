import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../contexts/mainContext";
import Sidebar from "./../components/Sidebar";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
import Loader from "../components/Loader";
import Video from "./../components/Video";
export default function Feed() {
  let { category } = useContext(mainContext);
  let [loader, setLoader] = useState(false);
  let [videos, setVideos] = useState([]);
  let { activeLink } = useContext(mainContext);
  useEffect(() => {
    setLoader(true);
    fetchFromAPI(`search?part=snippet&q=${category}`)
      .then((res) => {
        console.log(res.items);
        setVideos(res?.items);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);
  if (loader) return <Loader />;

  return (
    <div className="relative flex">
      <div
        className={`fixed md:relative top-0 bg-black  z-40 left-0 bottom-0 md:block h-screen md:w-60 ${
          activeLink ? "w-60" : "w-0 hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex-2 h-screen w-full overflow-auto pb-6 bg-black text-white pt-3 px-2 md:px-4">
        <p className="text-3xl font-bold">
          {category} <span className="text-[rgb(255,0,0)]">Videos</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
          {videos?.map((item, index) => (
            <Video key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
