import axios from "../utils/axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext(null);
const MovieContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [wallpaper, setWallpaper] = useState(null);
  const [activeSearch, setActiveSearch] = useState(true);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const [category, setCategory] = useState("all");
  const [type_Movie, setType_Movie] = useState("now_playing");
  const [type_Tv, setType_Tv] = useState("on_the_air");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [travel, setTravel] = useState(0)

  const GetSearches = async () => {
    if (!query) return;
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const randomize =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomize);
    } catch (error) {
      console.error("Wallpaper Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending(data.results);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Trending Error: ", error);
    }
  };

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category == "all" ? "movie" : category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular(data.results);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Popular Error: ", error);
    }
  };

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${type_Movie}?page=${page}`);
      console.log(`movie/${type_Movie}?page=${page}`)
      if (data.results.length > 0) {
        setMovie(data.results)
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Popular Error: ", error);
    }
  };
  const GetTv = async () => {
    try {
      const { data } = await axios.get(`tv/${type_Tv}?page=${page}`);

      if (data.results.length > 0) {
        setTv(data.results);

      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Tv Error: ", error);
    }
  };

  const refreshTrendHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  };

  const refreshPopularHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  };

  const refreshMovieHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  };

  const refreshTvHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setPage(1);
      setTv([]);
      GetTv();
    }
  };


  useEffect(() => {
    GetSearches();
    !wallpaper && GetWallpaper();
  }, [query]);

  useEffect(() => {
    refreshTrendHandler();
  }, [category, duration]);

  useEffect(() => {
    refreshPopularHandler();
  }, [category]);

  useEffect(() => {
    refreshMovieHandler();
  }, [type_Movie]);

  useEffect(() => {
    refreshTvHandler();
  }, [type_Tv]);


  const contextValue = {
    query,
    search,
    setQuery,
    wallpaper,
    trending,
    category,
    setCategory,
    duration,
    setDuration,
    GetTrending,
    GetPopular,
    popular,
    hasMore,
    movie,
    setMovie,
    type_Movie,
    setType_Movie,
    type_Tv,
    setType_Tv,
    GetMovie,
    GetTv,
    tv,
    setTv,
    activeSearch,
    setActiveSearch,
    setPage,
    page,
    travel,
    setTravel
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
