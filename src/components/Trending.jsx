import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Loading from "./Loading";
import DropDown from "./Templates/DropDown";
import { MovieContext } from "../context/context";
import Cards from "./Templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const {
    trending,
    category,
    setCategory,
    duration,
    setDuration,
    GetTrending,
    hasMore,
  } = useContext(MovieContext);
  document.title = "DexHub | Trending " + category[0].toUpperCase() + category.slice(1);
  const [title, seTitle] = useState("Category");
  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-center gap-5 mb-5">
        <h1 className="w-[15%] text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-2 ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-[40%]">
          <TopNav />
        </div>
        <DropDown
          title={title}
          options={["movie", "tv", "all"]}
          func={(e) => {
            setCategory(e);
            seTitle(e);
          }}
        />
        <DropDown
          title={duration}
          options={["week", "day"]}
          func={(e) => setDuration(e)}
        />
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
