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
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-full flex flex-col justify-center items-start pl-40 pt-24"
    >
      <h1 className="w-[70%] text-zinc-200 text-6xl font-bold shadow-6xl">
        {wallpaper.title || wallpaper.name || wallpaper.original_title}
      </h1>
      <p className="w-[52%] mt-16 text-white font-semibold text-[1.1rem]">
        {wallpaper.overview.slice(0, 202)}...
        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
          className="text-[#dc1623]"
        >
          continue reading
        </Link>
      </p>
      <div className="flex mb-3">
        <p className="text-white mt-5 mr-5 font-medium text-[1.2rem]">
          <i className="mr-2 text-2xl shadow-md text-yellow-400 ri-calendar-fill"></i>
          {wallpaper.first_air_date || wallpaper.release_date || "No Information"}
        </p>
        <p className="text-white mt-5 capitalize font-medium text-[1.2rem]">
          <i className="text-2xl text-yellow-400 mr-2 ri-movie-fill shadow-md"></i>
          {wallpaper.media_type.toUpperCase()}
        </p>
      </div>
      <Link
        to={`/${wallpaper.media_type || title}/details/${wallpaper.id}`}
        className="bg-[#dc1623] hover:scale-[1.05] hover:shadow-lg px-8 py-3 text-white rounded-full font-semibold mt-10"
      >
        <i className="mr-2 ri-play-large-fill"></i>Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
