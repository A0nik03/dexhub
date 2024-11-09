import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/context";
import Loading from "./Loading";
import DropDown from "./Templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Templates/Cards";
import TopNav from "./Templates/TopNav";

const Tv = () => {
  const navigate = useNavigate();
  const { tv, type_Tv,setType_Tv, GetTv, hasMore } =
    useContext(MovieContext);
  document.title = "DexHub | Tv ";
  console.log(tv);
  const [title, seTitle] = useState("Now Airing");
  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-center gap-5 mb-5">
        <h1 className="w-[15%] text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-2 ri-arrow-left-line"
          ></i>
          TV Shows
        </h1>
        <div className="w-[40%]">
          <TopNav />
        </div>
        <DropDown
          title={title === "now_playing" ? "Now Playing" :title}
          options={["on_the_air","top_rated","popular","airing_today"]}
          func={(e) => {
            setType_Tv(e);
            seTitle(e);
          }}
        />
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tv;
