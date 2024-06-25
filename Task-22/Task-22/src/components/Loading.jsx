import React from "react";

function Loading({ isLoading }) {
  return (
    <div className="container w-screen h-screen flex justify-center items-center bg-black">
      <h1 className="text-2xl font-bold text-white">Loading...</h1>
    </div>
  );
}

export default Loading;
