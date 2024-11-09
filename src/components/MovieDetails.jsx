import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "../components/Templates/HorizontalCards";
import assets from "../assets/assets";
import Loading from "./Loading";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(asyncLoadMovie(id));
    return () => {
      dispath(removeMovie());
    };
  }, [id]);

  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(${
          info.detail.backdrop_path || info.detail.poster_path
            ? `https://image.tmdb.org/t/p/original/${
                info.detail.backdrop_path || info.detail.poster_path
              }`
            : `${assets.noimage}`
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="relative w-screen h-[220vh]"
    >
      <div className="w-[90%] mx-auto">
        {/* Part 1 Navigation */}

        <div className="first-part h-screen ">
          <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
            <Link
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] mr-2 ri-arrow-left-line"
            ></Link>

            <a target="_blank" href={info.detail.homepage}>
              <i className="ri-external-link-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
            >
              imdb
            </a>
          </nav>

          {/* Part 2 Poster and Details */}
          <div className="w-full flex">
            <div className="w-[80vh] h-[40vh] mt-24 mr-10 flex flex-col gap-5 items-center justify-center">
              <img
                className="w-[30vw] h-[70vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)] rounded-md"
                src={
                  info.detail.backdrop_path || info.detail.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path || info.detail.backdrop_path
                      }`
                    : `${assets.noimage}`
                }
                alt=""
              />
            </div>

            <div className="context ml-5">
              <h1 className="text-5xl font-black text-white">
                {info.detail.name ||
                  info.detail.title ||
                  info.detailoriginal_name ||
                  info.detail.original_title}
                <small className="text-2xl font-bold text-zinc-300">
                  ({info.detail.release_date.split("-")[0]})
                </small>
              </h1>

              <div className="mt-5 mb-5 flex text-white items-center gap-x-5">
                <span className="rounded-full text-sm text-white font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center">
                  {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </span>
                <h1 className="font-semibold text-2xl w-[60px] leading-6">
                  User Score
                </h1>
                <h1>{info.detail.release_date}</h1>
                <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
                <h1>{info.detail.runtime} min</h1>
              </div>

              <h1 className="text-xl mb-5 font-semibold italic text-zinc-200">
                {info.detail.tagline}
              </h1>
              <h1 className="text-2xl mb-5 mt-5 text-white">OverView</h1>
              <p className="text-white">{info.detail.overview}</p>
              <h1 className="text-2xl mb-5 mt-5 text-white">
                Movie Translated
              </h1>
              <p className="text-white mb-20">{info.translations.join(", ")}</p>
              <Link
                className="mt-32 px-8 py-5 bg-[#dc1623] hover:scale-[1.05] rounded-lg text-white font-semibold text-xl"
                to={`${pathname}/trailer`}
              >
                <i className="mr-2 ri-play-fill"></i>
                Play Trailer
              </Link>
            </div>
          </div>
        </div>

        <div className="middle-part h-screen ">
          {/* Available on Platforms */}
          <div className="w-[80%] mb-10 flex flex-col gap-y-5">
            {info.watchproviders && info.watchproviders.flatrate && (
              <div className="flex gap-x-10 items-center text-white">
                <h1 className="font-semibold">Available on Platforms</h1>
                {info.watchproviders.flatrate.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[5vh] h-[5vh] object-fit rounded-md"
                    src={
                      w.logo_path
                        ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                        : `${assets.noimage}`
                    }
                  />
                ))}
              </div>
            )}
            {info.watchproviders && info.watchproviders.rent && (
              <div className="flex gap-x-10 items-center text-white">
                <h1 className="font-semibold mr-10">Available on rent</h1>
                {info.watchproviders.rent.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[5vh] h-[5vh] object-fit rounded-md"
                    src={
                      w.logo_path
                        ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                        : `${assets.noimage}`
                    }
                  />
                ))}
              </div>
            )}
            {info.watchproviders && info.watchproviders.flatrate && (
              <div className="flex gap-x-10 items-center text-white">
                <h1 className="font-semibold mr-12">Available to Buy</h1>
                {info.watchproviders.flatrate.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[5vh] h-[5vh] object-fit rounded-md"
                    src={
                      w.logo_path
                        ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                        : `${assets.noimage}`
                    }
                  />
                ))}
              </div>
            )}
          </div>
          {/* Part 4 Recommendations and Similar Stuff */}
          <hr className="mt-5 mb-10 border-none h-[2px] bg-zinc-500" />
          <h1 className="w-[90%] mx-auto text-3xl font-bold text-white mb-10">
            Recommendations & Similar Stuff
          </h1>
          {info.recommendations.length > 0 ? (
            <HorizontalCards
              data={
                info.recommendations.length > 0
                  ? info.recommendations
                  : info.similar
              }
            />
          ) : (
            <div className="w-full flex">
              <img
              className="object-cover rounded-lg"
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzM4dTk1OW5yendnd2FrZzlwZWZ6M3p1ZDByNXoxdHZjN3phNXBqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUI2MAQ68JYCTdMuqO/giphy.webp"
                alt=""
              />
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default MovieDetails;
