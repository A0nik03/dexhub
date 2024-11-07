import React, { useContext, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards";
import DropDown from "./Templates/DropDown";
import { MovieContext } from "../context/context";
import Loading from "./Loading";

const Home = () => {
  const { setCategory,wallpaper,trending } = useContext(MovieContext);
  const [title, seTitle] = useState("Filter");
  document.title = "HomePage";

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-x-hidden overflow-y-auto">
        <TopNav />
        <Header wallpaper={wallpaper} />
        <div className="flex justify-between items-center p-5">
          <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
          <DropDown
            title={title}
            options={["tv", "movie", "all"]}
            func={(e) => {
              setCategory(e);
              seTitle(e);
            }}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ): <Loading/>;
};

export default Home;
