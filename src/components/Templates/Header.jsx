import React, { useContext } from "react";
import { MovieContext } from "../../context/context";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(${
          wallpaper.backdrop_path || wallpaper.poster_path
            ? `https://image.tmdb.org/t/p/original/${
                wallpaper.backdrop_path || wallpaper.poster_path
              }`
            : `${assets.noimage}`
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-10"
    >
      <h1 className="w-[70%] text-zinc-300 text-4xl font-bold shadow-2xl">
        {wallpaper.title || wallpaper.name || wallpaper.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-white">
        {wallpaper.overview.slice(0, 200)}...<Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className="text-[#6556cd]">more</Link>
      </p>
      <div className="flex mb-3">
        <p className="text-white mt-2 mr-5 font-medium">
          <i className="text-xl text-yellow-400 mr-1 ri-logout-circle-r-fill shadow-md"></i>
          {wallpaper.release_date || "No Information"}
        </p>
        <p className="text-white mt-2 capitalize font-medium">
          <i className="text-xl text-yellow-400 mr-1 ri-movie-2-fill shadow-md">
            {" "}
          </i>
          {wallpaper.media_type}
        </p>
      </div>
      <Link to = {`/${wallpaper.media_type || title}/details/${wallpaper.id}`} className="bg-[#6556cd] hover:bg-[#4332b4] p-4 text-white rounded-md font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
