import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
import Video from "./../components/Video";
import Loader from "../components/Loader";
export default function SearchFeed() {
  let { id } = useParams();
  let [loader, setLoader] = useState(false);
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetchFromAPI(`search?part=snippet&q=${id}`)
      .then((res) => {
        console.log(res.items);
        setVideos(res?.items);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  if (loader) return <Loader />;

  return (
    <div className="flex-2 h-screen w-full overflow-auto pb-6 bg-black text-white pt-3 px-2 md:px-4">
      <p className="text-3xl font-bold">
        {id} <span className="text-[rgb(255,0,0)]">Videos</span>
      </p>
      <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
        {videos?.map((item, index) => (
          <Video key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
