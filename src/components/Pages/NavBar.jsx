import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/context";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { query, setQuery,setTravel } = useContext(MovieContext);
  const [searchButton, setSearchButton] = useState(false);

  const tabs = [
    { name: "Home", path: "/",},
    { name: "Trending", path: "#section",value:0 },
    { name: "Popular", path: "#section",value:1 },
    { name: "Movies", path: "#section",value:2 },
    { name: "Tv Series", path: "#section",value:3},
  ];

  const handleSearchToggle = () => {
    setSearchButton(!searchButton);
    setQuery("");
  };

 const scrollToSection = () => {
  const section = document.getElementById("section");
  section.scrollIntoView({ behavior: 'smooth' });
};

  

  return (
    <div className="absolute w-full h-[14.5vh]">
      <div className="h-full flex items-center justify-between">
        <div className="flex gap-16 text-white">
          <h1 className="text-4xl text-[#dc1623] pl-16 font-bold">NETSEEE</h1>
          {tabs.map((tab, index) => (
            <div
              onClick={() =>{ 
                setActiveTab(index)
                scrollToSection()
                if(index != 0) setTravel(tab.value)
                }
              }
              
              key={index}
              className="flex flex-col items-center mt-2"
            >
              <Link to={tab.path} className="text-xl font-semibold">
                {tab.name}
              </Link>
              {index === activeTab && (
                <span
                  style={{ boxShadow: "0 0 0.15em #dc1623" }}
                  className="h-2 w-2 mt-2 bg-[#dc1623] rounded-full"
                ></span>
              )}
            </div>
          ))}
        </div>
        <div className="mr-28 flex gap-10 justify-center items-center">

          <div className={`relative ${searchButton ? 'w-96' : 'w-0'} transition-all duration-500`}>
            {searchButton && (
              <input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles..."
                value={query}
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  fontSize: "16px",
                  transition: "width 0.3s ease-in-out, opacity 0.3s ease-in-out",
                }}
                className="text-white w-full"
                type="text"
              />
            )}
          </div>

          <span
            style={{
              background: searchButton ? "rgba(220, 22, 35, 0.5)" : "transparent",
              transition: "background 0.3s ease, transform 0.3s ease",
              transform: searchButton ? "scale(1.2)" : "scale(1)",
            }}
            className={`h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
          >
            <i
              onClick={handleSearchToggle}
              className="text-2xl font-semibold text-white ri-search-line"
            ></i>
          </span>
          <span className="h-12 w-12 flex justify-center items-center rounded-md bg-gradient-to-t from-rose-500 to-rose-800">
            <i className="text-xl text-white ri-user-3-fill"></i>
          </span>
        </div>
      </div>
      <hr className="border-[1px] border-zinc-100 opacity-[0.5]" />
    </div>
  );
};

export default NavBar;
