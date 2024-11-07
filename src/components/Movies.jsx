import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/context";
import Loading from "./Loading";
import DropDown from "./Templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Templates/Cards";
import TopNav from "./Templates/TopNav";

const Movies = () => {
  const navigate = useNavigate();
  const { movie, type_Movie,setType_Movie, GetMovie, hasMore } =
    useContext(MovieContext);
  document.title = "DexHub | Movies ";
  const [title, seTitle] = useState("Now Playing");
  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-center gap-5 mb-5">
        <h1 className="w-[15%] text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-2 ri-arrow-left-line"
          ></i>
          Movies
        </h1>
        <div className="w-[40%]">
          <TopNav />
        </div>
        <DropDown
          title={title === "now_playing" ? "Now Playing" :title}
          options={["now_playing","popular","top_rated","upcoming"]}
          func={(e) => {
            setType_Movie(e);
            seTitle(e);
          }}
        />
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
