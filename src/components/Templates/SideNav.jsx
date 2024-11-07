import React from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import axios from "axios";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
      <div className="flex gap-2 items-center">
        <img className="h-9" src={assets.logo} alt="" />
        <h1 className="text-white text-2xl font-bold font-[Satoshi] leading-none tracking-wider">
          DexTer.
        </h1>
      </div>
      <nav className="flex flex-col text-zinc-400 text-xl gap-2 pb-2">
        <h1 className="text-white font-semibold text-xl pt-8">
          New Feeds
        </h1>
        <Link to='/trending' className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to='/popular' className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link to = '/movie' className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link to='/tv' className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-glasses-2-fill"></i>Anime
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl pt-8">
          Website Info
        </h1>
        <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-customer-service-2-fill"></i>Contact Us
        </Link>
        <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-information-2-fill"></i>About
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
