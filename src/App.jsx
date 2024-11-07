import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tv from "./components/TvShows";
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";
import Trailer from "./components/Templates/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
