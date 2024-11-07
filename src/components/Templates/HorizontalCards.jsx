import React, { useRef } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
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
      {/* Left scroll button */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        onClick={scrollLeft}
        className="absolute w-[4%] h-24 top-[50%] left-0 transform -translate-y-1/2 rounded-md z-10 flex items-center justify-center hover:bg-[#6556CD] hover:scale-105 cursor-pointer"
      >
        <i className="text-4xl text-white ri-arrow-left-wide-line"></i>
      </div>

      {/* Right scroll button */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        onClick={scrollRight}
        className="absolute w-[4%] h-24 top-[50%] right-0 transform -translate-y-1/2 rounded-md z-10 flex items-center justify-center hover:bg-[#6556CD] hover:scale-105 cursor-pointer"
      >
        <i className="text-4xl text-white ri-arrow-right-wide-line"></i>
      </div>

      {/* Cards container with smooth scroll */}
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        ref={containerRef}
      >
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[18%] h-[48vh] bg-zinc-900 mr-5 mb-5 rounded-md overflow-hidden transition-all duration-200"
            >
              <img
                className="w-full h-[55%] object-cover"
                src={
                  d.backdrop_path || d.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.poster_path
                      }`
                    : `${assets.noimage}`
                }
                alt="Media Thumbnail"
              />
              <div className="h-[45%] text-white p-3 text-justify overflow-hidden overflow-y-auto">
                <h1 className="mb-2 text-xl font-semibold leading-none tracking-tighter">
                  {d.title || d.name || d.original_name || d.original_title}
                </h1>
                <p className="text-sm leading-2 tracking-tighter">
                  {d.overview.slice(0, 90)}...
                  <span className="text-blue-400">more</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1
            className="
        text-3xl font-black mt-5 text-white"
          >
            Nothing to Show
          </h1>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;
