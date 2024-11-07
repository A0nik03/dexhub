import React from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const Cards = ({ data,title}) => {
  console.log(title)
  return (
    <div className="pl-36 p-10 flex flex-wrap w-full bg-[#1F1E24]">
      {data.map((data, index) => (
        <Link
        to = {`/${data.media_type || title}/details/${data.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%] hover:scale-[1.1]"
          key={index}
        >
          <img
            className="w-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)] rounded-md"
            src={
              data.backdrop_path || data.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    data.poster_path || data.backdrop_path
                  }`
                : `${assets.noimage}`
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
            {data.name || data.title || data.original_name}
          </h1>
          <div className="absolute right-[-10%] bottom-[25%] rounded-full text-sm text-white font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center">
            {(data.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
