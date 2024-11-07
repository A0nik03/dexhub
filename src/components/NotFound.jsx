import React from "react";
import assets from "../assets/assets";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <video className="h-[50%] object-cover" playsInline muted loop autoPlay src={assets.not_found}></video>
    </div>
  );
};

export default NotFound;
