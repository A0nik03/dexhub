import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <RingLoader color="#6556cd" size={120} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
