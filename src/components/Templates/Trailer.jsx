import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="bg-[rgba(0,0,0,.9)] absolute top-0 left-0 z-[100] w-full h-full flex items-center justify-center text-white">
      {ytvideo ? (
        <ReactPlayer
          height={500}
          width={1000}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556cd] mr-2 ri-close-fill text-4xl text-white right-[11%] top-[26%]"
      ></Link>
    </div>
  );
};

export default Trailer;
