import React from "react";

export default function Video({ video }) {
  return (
    <div className="w-[250px] min-h-[250px] bg-[#1E1E1E]  rounded-lg cursor-pointer">
      {video.id.kind == "youtube#video" ? (
        <div className="w-full h-full flex flex-col">
          <img
            src={video.snippet.thumbnails.high.url}
            alt="video"
            className="w-full h-[50%] object-cover rounded-t-lg"
          />
          <div className="flex flex-col p-2 gap-3">
            <p className="text-white font-semibold text-sm">
              {video.snippet.title}
            </p>
            <p className="text-gray-400 font-semibold">
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center flex-col"></div>
      )}
    </div>
  );
}
