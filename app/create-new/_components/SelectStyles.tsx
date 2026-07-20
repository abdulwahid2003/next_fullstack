"use client";
import React, { useState } from "react";
import Image from "next/image";
function SelectStyles({ onUserSelect }) {
  const styleOptions = [
    { name: "Realistic", image: "/real.png" },
    { name: "Cartoon", image: "/cartoon.png" },
    { name: "Comic", image: "/comic.png" },
    { name: "Watercolor", image: "/watercolor.png" },
    { name: "GTA", image: "/gta.png" },
  ];
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div
            key={`${item}`}
            className={`relative hover:scale-105 transition-all cursor-pointer ${selectedOption == item?.name && "border-5 border-primary rounded-lg"}`}
          >
            <Image
              src={item?.image}
              className="h-70 object-cover rounded-lg w-full"
              alt={"dd"}
              height={100}
              width={100}
              content={""}
              onClick={() => {
                setSelectedOption(item?.name);
                onUserSelect("imageStyle", item?.name);
              }}
            />
            <h2 className="absolute  bottom-0 w-full text-white text-center rounded-lg">
              {item?.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyles;
