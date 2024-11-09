import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/context";
import Cards from "../Templates/Cards";
import { Pagination, Slider, Switch } from "@mui/material";

const MediaSection = ({ data, title, logo, funct, sender }) => {
  const { page, setPage } = useContext(MovieContext);

  const [review, setReview] = useState(0);
  const [switchh, setSwitchh] = useState(false);
  const label = { inputProps: { "aria-label": "Switch Review" } };

  const handleChange = (event, newValue) => {
    setReview(newValue);
  };

  const handlePage = (event, value) => {
    console.log("Page changed to: " + value);
    setPage(value);
  };

  useEffect(() => {
    if (!switchh) {
      setReview(0);
    }
  }, [switchh]);

  useEffect(() => {
    funct();
  }, [page]);

  return (
    <div className="h-screen bg-[#16151a]">
      <div className="w-[90vw] mx-auto h-[10vh]">
        <div className="w-full h-full flex justify-between items-center">
          <h1 className={`text-white text-3xl font-semibold cursor-pointer`}>
            <i className={`mr-2 ${logo}`}></i>
            {title}
          </h1>

          <div className="w-96 flex justify-end items-center ">
            {switchh && (
              <div className="flex w-full items-center opacity-100 transition-opacity duration-300">
                <i className={`mr-4 text-2xl text-yellow-500 ri-star-fill`}></i>
                <Slider
                  min={0}
                  max={10}
                  step={0.1}
                  value={review}
                  style={{
                    height: "5px",
                    color: "#eab308",
                  }}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                  className="mr-3"
                  sx={{
                    "& .MuiSlider-thumb": {
                      height: "18px",
                      width: "18px",
                      color: "#ffffff",
                      boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.8)",
                    },
                  }}
                />
                <p className="text-xl mr-2 text-white font-medium">{review}</p>
              </div>
            )}
            <div>
              <Switch
                onClick={() => setSwitchh(!switchh)}
                {...label}
                checked={switchh}
                color="default"
                sx={{
                  "& .MuiSwitch-track": {
                    backgroundColor: "#e0565b",
                    opacity: 1,
                  },
                  "& .MuiSwitch-thumb": {
                    color: "#ffffff",
                    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.8)",
                  },
                  "&.Mui-checked .MuiSwitch-track": {
                    backgroundColor: "#e0565b",
                  },
                }}
                style={{ color: "#dc1623" }}
              />

              <p className="text-xl mr-2 text-white font-medium">Review</p>
            </div>
          </div>
        </div>
        <hr className="w-full mt-10 border-[1px] opacity-[0.4] bg-zinc-200"></hr>
      </div>
      <div className="mt-32 w-[90%] mx-auto">
        <Cards data={data} review={review} title={sender} />
      </div>

      <div className="w-full h-[10vh] flex justify-center mt-10 mb-10">
        <Pagination
          onChange={handlePage}
          page={page}
          count={data.length}
          variant="outlined"
          size="large"
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              borderColor: "rgba(220, 22, 35, 0.5)",
            },
            "& .Mui-selected": {
              color: "#ffffff",
              backgroundColor: "rgba(220, 22, 35, 0.2)",
            },
          }}
        />
      </div>
    </div>
  );
};

export default MediaSection;
