import React, { useContext } from "react";
import { MovieContext } from "../../context/context";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";

const SearchBox = () => {
  const { query, search, activeSearch } = useContext(MovieContext);

  return (
    <div>
      {query.length > 0 && activeSearch && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
          }}
          className="p-10 ml-32 search-box absolute w-[85%] h-[85vh] flex flex-wrap gap-10 z-[100]  bottom-0 overflow-auto rounded scroll-smooth"
        >
          {search.map((s, i) => {
            return (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="duration-300  text-white font-semibold flex justify-start items-center"
              >
                <img
                  className="w-[28vh] h-[38vh] object-cover rounded mr-5 shadow-lg"
                  src={
                    s.poster_path || s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.poster_path || s.backdrop_path || s.profile_path
                        }`
                      : `${assets.noimage}`
                  }
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
