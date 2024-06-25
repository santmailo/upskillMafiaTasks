import React from "react";

function PhotosApp({ data }) {
  return (
    <div className="border border-black container bg-black min-w-screen ">
      <h1 className="text-4xl text-center m-10 font-bold text-white ">
        Photos
      </h1>
      <div className=" justify-around flex gap-4 flex-wrap box-border">
        {data.map((obj) => {
          return (
            <div
              className="w-1/4 flex flex-col justify-center items-center border p-5"
              key={obj.id}
            >
              <img className="w-2/3 " src={obj.url} alt="image not found" />
              <p className="text-white text-center m-3">{obj.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhotosApp;
