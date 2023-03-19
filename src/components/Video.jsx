import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoProfilePicture,
} from "./../utils/constants";
import ChannelCards from "./ChannelCards";
export default function Video({ item }) {
  return (
    <div className="w-[250px] min-h-[250px]   rounded-lg cursor-pointer">
      {item.id.kind == "youtube#video" ? (
        <Link
          className="w-full h-full flex flex-col bg-[#1E1E1E]"
          to={`/video/${item.id.videoId || demoVideoUrl}`}
        >
          <img
            src={item.snippet.thumbnails.high.url || demoThumbnailUrl}
            alt="item"
            className="w-full h-[50%] object-cover rounded-t-lg"
          />
          <div className="flex flex-col p-2 gap-3">
            <p className="text-white font-semibold text-sm">
              {item.snippet.title || demoVideoTitle}
            </p>
            <p className="text-gray-400 font-semibold">
              {item.snippet.channelTitle || demoChannelTitle}
            </p>
          </div>
        </Link>
      ) : (
        <ChannelCards
          channelId={item.id.channelId}
          title={item.snippet.title}
          url={item.snippet.thumbnails.high.url}
        />
      )}
    </div>
  );
}
