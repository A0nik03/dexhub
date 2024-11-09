import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/context";
import Header from "../Templates/Header";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import CategorySection from "./CategorySection";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

const Home = () => {
  const { wallpaper, query, search } = useContext(MovieContext);
  document.title = "HomePage";
  return wallpaper ? (
    <div className="relative w-screen h-screen bg-[#16151a] overflow-y-auto">
      <NavBar />
      <SearchBox />
      <Header wallpaper={wallpaper} />
      <CategorySection />
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
