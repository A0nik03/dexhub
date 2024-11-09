import React, { useEffect } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const Cards = ({ data, title, review }) => {
  const filtered_data = data.filter(
    (d) => d.vote_average.toPrecision(2) == review
  );

  return (
    <div className="flex flex-wrap gap-10 w-full bg-[#16151a]">
      {(review != 0 ? filtered_data : data).map((d, i) => (
        <Link
          key={i}
          to={`/${title || d.media_type}/details/${d.id}`}
          className="min-w-[14%] h-[55vh]"
        >
          <div
            key={i}
            className="h-[75%] bg-zinc-900 rounded-lg overflow-hidden transition-all duration-200"
          >
            <img
              className="w-full h-full object-cover"
              src={
                d.poster_path || d.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.poster_path || d.backdrop_path
                    }`
                  : `${assets.noimage}`
              }
              alt="Media Thumbnail"
            />
          </div>
          <h1 className="mt-8 text-[1.23rem] text-white font-semibold leading-none whitespace-nowrap">
            {(d.name || d.title || d.original_name).length > 19
              ? (d.name || d.title || d.original_name).slice(0, 19) + "..."
              : d.name || d.title || d.original_name}
          </h1>
          <div className="mt-3 text-sm text-zinc-500 font-bold flex justify-between items-center">
            <p>
              {(d.first_air_date || d.release_date)?.split("-")[0] || "N/A"}
            </p>
            <div className="flex gap-4 items-center">
              <i className="text-zinc-500 ri-heart-fill cursor-pointer"></i>
              <i className="text-[#dc1623] ri-eye-fill"></i>

              <span className="text-yellow-500">
                <i className="text-yellow-500 ri-star-fill mr-2"></i>
                {d.vote_average.toPrecision(2)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
