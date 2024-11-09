import React, { useContext, useState, useEffect } from "react";
import HorizontalCards from "../Templates/HorizontalCards";
import MediaSection from "./MediaSection";
import { MovieContext } from "../../context/context";

const CategorySection = () => {
  const {
    trending,
    movie,
    popular,
    tv,
    setCategory,
    setType_Movie,
    setType_Tv,
    setDuration,
    GetMovie,
    GetTv,
    GetTrending,
    GetPopular,
    travel
  } = useContext(MovieContext);

  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [durat, setDurat] = useState(0);
  const [cardPath, setCardPath] = useState(trending);
  const [cardTitle, setCardTitle] = useState("movie");
  const [title, setTitle] = useState("movie" || "tv");

  const sections = [
    {
      name: "Trends Now",
      default: "all",
      path: trending,
      title: "trending",
      logo: "ri-fire-fill",
      funct: GetTrending,
    },
    {
      name: "Popular",
      default: "movie",
      path: popular,
      title: "popular",
      logo: "ri-bard-fill",
      funct: GetPopular,
    },
    {
      name: "Movies",
      default: "now_playing",
      path: movie,
      title: "movie",
      logo: "ri-movie-2-fill",
      funct: GetMovie,
    },
    {
      name: "Tv Series",
      default: "top_rated",
      path: tv,
      title: "tv",
      logo: "ri-tv-fill",
      funct: GetTv,
    },
  ];

  const selection = {
    trending: [
      {
        category: [
          { type: "all", title: "All" },
          { type: "movie", title: "Movie" },
          { type: "tv", title: "Tv Series" },
        ],
      },
    ],
    popular: [
      {
        category: [
          { type: "movie", title: "Movie" },
          { type: "tv", title: "Tv Series" },
        ],
      },
    ],
    movie: [
      {
        category: [
          { type: "now_playing", title: "Now Playing" },
          { type: "popular", title: "Popular" },
          { type: "top_rated", title: "Top Rated" },
          { type: "upcoming", title: "Upcoming" },
        ],
      },
    ],
    tv: [
      {
        category: [
          { type: "on_the_air", title: "On The Air" },
          { type: "top_rated", title: "Top Rated" },
          { type: "popular", title: "Popular" },
          { type: "airing_today", title: "Airing Today" },
        ],
      },
    ],
  };

  const activeSectionTitle = sections[activeSection].title;
  const activeCategories = selection[activeSectionTitle][0].category;

  console.log(travel)

  useEffect(() => {
    try {
      switch (activeSection) {
        case 0:
        case 1:
          setCategory(cardTitle);
          setCardPath(sections[activeSection].path);
          break;
        case 2:
          setType_Movie(cardTitle);
          setCardPath(movie);
          break;
        case 3:
          setType_Tv(cardTitle);
          setCardPath(tv);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error updating section data:", error);
    }
  }, [
    cardTitle,
    activeSection,
    movie,
    tv,
    popular,
    trending,
    setCategory,
    setType_Movie,
    setType_Tv,
  ]);
  useEffect(() => {
    if (travel !== undefined) {
      setActiveSection(travel);
      setCardTitle(sections[travel].default); 
      setCardPath(sections[travel].path);
      setActiveCategory(0); 
    }
  }, [travel]);
  return (
    <div id="section" className="h-screen bg-[#16151a]">
      <div className="w-[90vw] mx-auto h-[20vh]">
        <div className="mt-10 flex justify-between">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveSection(index);
                setCardTitle(section.default);
                setActiveCategory(0);
                setCardPath(section.path);
              }}
              className="flex flex-col items-center"
            >
              <h1
                className={`mt-10 ${
                  activeSection === index
                    ? "text-3xl text-white"
                    : "text-2xl text-zinc-500"
                } font-semibold cursor-pointer`}
              >
                <i className={`mr-2 ${section.logo}`}></i>
                {section.name}
              </h1>
              {index === activeSection && (
                <span
                  style={{ boxShadow: "0 0 0.15em #dc1623" }}
                  className="h-2 w-2 mt-2 bg-[#dc1623] rounded-full"
                ></span>
              )}
            </div>
          ))}
        </div>
        <hr className="w-full mt-10 border-[1px] opacity-[0.4] bg-zinc-200"></hr>
      </div>
      <div className="w-[90%] h-[5vh] flex mx-auto mt-10">
        <div className="w-1/2 flex gap-5">
          {activeCategories.map((cat, index) => (
            <div
              key={index}
              onClick={() => {
                setCardTitle(cat.type);
                console.log("Selected: ", activeSection);
                switch (activeSection) {
                  case 0:
                    setTitle(cat.type);
                    break;
                  case 1:
                    setTitle(cat.type);
                    break;
                  case 2:
                    setTitle("movie");
                    break;
                  case 3:
                    setTitle("tv");
                }
                setActiveCategory(index);
              }}
              className={`px-8 py-2 rounded-full ${
                activeCategory === index ? "bg-[#dc1623]" : "bg-zinc-800"
              } text-white cursor-pointer`}
            >
              <h1 className="font-semibold">{cat.title}</h1>
            </div>
          ))}
        </div>
        <div
          className={`w-1/2 flex gap-5 ${
            activeSection !== 0 ? "opacity-0" : "opacity-100"
          }`}
        >
          {["day", "week"].map((cat, index) => (
            <div
              key={index}
              onClick={() => {
                setDuration(cat);
                setDurat(index);
              }}
              className={`w-28 py-2 rounded-full ${
                durat === index ? "bg-[#dc1623]" : "bg-zinc-800"
              } text-white cursor-pointer`}
            >
              <h1 className="font-semibold capitalize text-center whitespace-nowrap">
                {cat}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 w-[99%]">
        <HorizontalCards data={cardPath} title={cardTitle} sender={title} />
      </div>
      <MediaSection
        data={sections[activeSection].path}
        title={sections[activeSection].name}
        logo={sections[activeSection].logo}
        funct={sections[activeSection].funct}
        sender={title}
      />
    </div>
  );
};

export default CategorySection;
