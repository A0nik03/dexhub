import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../store/actions/TvActions";
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

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(asyncLoadTv(id));
    return () => {
      dispath(removeTv());
    };
  }, [id]);

  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(${
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
      className="relative w-screen h-[250vh] px-[10%]"
    >
      {/* Part 1 Navigation */}
      <nav className=" h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
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
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <img
            className="w-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)] rounded-md"
            src={
              info.detail.backdrop_path || info.detail.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.detail.poster_path || info.detail.backdrop_path
                  }`
                : `${assets.noimage}`
            }
            alt=""
          />

          <Link
            className="bottom-46 px-8 py-5 bg-[#6556CD] hover:bg-[#4332b4] rounded-lg text-white font-semibold text-xl"
            to={`${pathname}/trailer`}
          >
            <i className="mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>

        <div className="context ml-5">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detailoriginal_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
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
          <h1 className="text-2xl mb-5 mt-5 text-white">Tv Translated</h1>
          <p className="text-white">{info.translations.join(", ")}</p>
        </div>
      </div>

      {/* Available on Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-8 mb-8">
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
            {info.watchproviders.rent.map((w) => (
              <img
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

      {/* Part 4 Seasons */}
      <hr className="mt-5 mb-8 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
        {info.detail.seasons ? (
          info.detail.seasons.map((s, i) => (
            <div className="w-[15vh] mr-[12%]">
              <img
                className="h-[40vh] min-w-[14vw] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)] rounded-md"
                src={
                  s.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.poster_path
                      }`
                    : `${assets.noimage}`
                }
                alt=""
              />
              <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
                {s.name}
              </h1>
            </div>
          ))
        ) : ( 
          <h1
            className="
        text-3xl font-black mt-5 text-white"
          >
            Nothing to Show
          </h1>
        )}
      </div>

      {/* Part 5 Recommendations and Similar Stuff */}
      <hr className="mt-5 mb-8 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};
export default TvDetails;
