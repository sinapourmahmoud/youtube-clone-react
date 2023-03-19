import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCards from "../components/ChannelCards";
import Video from "../components/Video";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
import Loader from "../components/Loader";
export default function ChannelDetail() {
  let [channelDetail, setChannelDetail] = useState(null);
  let [loader, setLoader] = useState(false);
  let [videos, setVideos] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      setLoader(true);
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log(data);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      console.log(videosData?.items);
      setVideos(videosData?.items);
      setLoader(false);
    };

    fetchResults();
  }, [id]);
  if (loader) return <Loader />;
  return (
    <div className="bg-black h-screen overflow-auto">
      <img
        src="https://source.unsplash.com/1600x900/?nature,photography,technology"
        className="w-full h-[300px] object-cover"
        alt="cover"
      />
      {channelDetail && (
        <ChannelCards
          url={channelDetail?.snippet?.thumbnails?.high?.url}
          channelId={channelDetail?.id}
          title={channelDetail?.snippet?.title}
          styles="-mt-16 mx-auto"
        />
      )}
      <div className="flex flex-wrap gap-3 justify-center md:justify-start mx-auto  ">
        {videos?.map((item, index) => (
          <Video item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
