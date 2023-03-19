import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";

export default function ChannelCards({ url, title, channelId, styles }) {
  return (
    <Link
      to={`/channel/${channelId || demoChannelUrl}`}
      className={`w-[250px] h-[250px] flex items-center justify-center gap-2 flex-col ${styles}`}
    >
      <img
        src={url || demoProfilePicture}
        alt="channel"
        className="w-[180px] h-[180px] rounded-full object-cover"
      />
      <h6 className="text-gray-400 font-semibold">
        {title || demoChannelTitle}
      </h6>
    </Link>
  );
}
