import React, { useEffect, useRef } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const HorizontalCards = ({ data, title,sender }) => {
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 600;
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 600;
    }
  };

  

  return (
    <div className="relative w-full mb-5 p-5">

      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        onClick={scrollLeft}
        className="absolute w-[4%] h-24 top-[50%] left-0 transform -translate-y-1/2 rounded-md z-10 flex items-center justify-center hover:bg-[#6556CD] hover:scale-105 cursor-pointer"
      >
        <i className="text-4xl text-white ri-arrow-left-wide-line"></i>
      </div>

      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        onClick={scrollRight}
        className="absolute w-[4%] h-24 top-[50%] right-0 transform -translate-y-1/2 rounded-md z-10 flex items-center justify-center hover:bg-[#6556CD] hover:scale-105 cursor-pointer"
      >
        <i className="text-4xl text-white ri-arrow-right-wide-line"></i>
      </div>

      <div
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
        ref={containerRef}
      >
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              key={i}
              to={`/${d.media_type || sender}/details/${d.id}`}
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
              <p>{(d.first_air_date || d.release_date)?.split("-")[0] || "N/A"}</p>
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
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
          <PacmanLoader color="#dc1623" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;
