import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import { MovieContext } from "../../context/context";

const TopNav = () => {
  const { search, query, setQuery } = useContext(MovieContext);

  return (
    <div className="w-[80%] h-[10vh] mx-auto relative flex items-center">
      <i className="text-zinc-400 text-3xl ri-search-2-line"></i>

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white"
        type="text"
        placeholder="Search"
      />

      {query.length > 0 && (
        <>
          <i
            onClick={() => setQuery("")}
            className="text-zinc-400 text-3xl ri-close-fill right-0"
          ></i>
          <div style={{
             background: "rgba(0, 0, 0, 0.7)"
          }} className="search-box z-[100] absolute w-[50%] max-h-[50vh] top-[100%] left-20 overflow-auto rounded scroll-smooth">
            {search.map((s, i) => {
              return (
                <Link
                  to={`/${s.media_type}/details/${s.id}`}
                  key={i}
                  className="hover:text-[#6556CD] duration-300 text-white font-semibold w-[100%] p-10 flex justify-start items-center border-b-2 border-[#6556CD]"
                >
                  <img
                    className="w-[14vh] h-[14vh] object-cover rounded mr-5 shadow-lg"
                    src={
                      s.backdrop_path || s.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            s.backdrop_path || s.profile_path
                          }`
                        : `${assets.noimage}`
                    }
                    alt=""
                  />
                  <span className="text-2xl">
                    {s.name || s.title || s.original_title}
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TopNav;
