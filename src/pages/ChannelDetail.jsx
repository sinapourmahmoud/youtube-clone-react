import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
export default function ChannelDetail() {
  let [channelDetail, setChannelDetail] = useState(null);
  let [videos, setVideos] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log(data);
      let res = data?.items[0];
      setChannelDetail({
        id: {
          kind: res.kind,
          id: res.kind,
        },
        snippet: res.snippet,
      });

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      console.log(videosData?.items);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <div>
      <img
        src="https://source.unsplash.com/1600x900/?nature,photography,technology"
        className="w-full h-[300px] object-cover"
        alt="cover"
      />
      {channelDetail && <Video item={channelDetail} />}
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {videos?.map((item, index) => (
          <Video item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
