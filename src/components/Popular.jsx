import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/context";
import Loading from "./Loading";
import DropDown from "./Templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Templates/Cards";
import TopNav from "./Templates/TopNav";

const Popular = () => {
  const navigate = useNavigate();
  const { popular, category, setCategory, GetPopular, hasMore } =
    useContext(MovieContext);
  document.title = "DexHub | Popular " + category[0].toUpperCase() + category.slice(1);
  const [title, seTitle] = useState("Category");
  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-center gap-5 mb-5">
        <h1 className="w-[15%] text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-2 ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="w-[40%]">
          <TopNav />
        </div>
        <DropDown
          title={title}
          options={["movie", "tv"]}
          func={(e) => {
            setCategory(e);
            seTitle(e);
          }}
        />
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
