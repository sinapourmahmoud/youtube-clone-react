import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Video from "../components/Video";
import Loader from "../components/Loader";
export default function VideoDetail() {
  const [loader, setLoader] = useState(false);
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      setLoader(false);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  if (loader) return <Loader />;
  return (
    <div className="w-full h-screen overflow-auto flex flex-col md:flex-row gap-5">
      <div className="flex-1 p-3 relative md:sticky flex flex-col gap-5 md:top-[0]">
        <div className="w-full   flex flex-col">
          <ReactPlayer
            className="react-player"
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <p className="text-gray-400 font-bold text-xl">
          {videoDetail?.snippet?.title}
        </p>
        <div className="flex items-center gap-3">
          <Link
            className="text-gray-400 font-semibold flex-1"
            to={`/channel/${videoDetail?.snippet?.channelId}`}
          >
            {videoDetail?.snippet?.channelTitle}
          </Link>
          <p className="text-gray-400 font-medium text-sm">
            Likes : {videoDetail?.statistics?.likeCount}
          </p>
          <p className="text-gray-400 font-medium text-sm">
            Views : {videoDetail?.statistics?.viewCount}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 md:w-[300px] justify-center">
        {videos?.map((item, index) => (
          <Video key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
