import React from "react";

const InfoBox = ({ data }) => {
  return (
    <div className="w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-[11.5rem] max-h-[11.5rem] min-h-[11.5rem]"
          src={data.image}
          alt="Sunset in the mountains"
        />
        <div className="px-1 py-4 flex flex-col gap-2">
          <div className="font-bold text-xl mb-2">{data.info}</div>

          <div className="flex">
            <p className="text-gray-800 bg-gray-300 text-base font-bold border-r pr-2">
              Room Number:
            </p>
            <p className="text-gray-800 text-base pl-2">{data.roomNo}</p>
          </div>

          <div className="flex">
            <p className="text-gray-800  bg-gray-300 text-base font-bold border-r pr-2">
              Room Usage:
            </p>
            <p className="text-gray-800 text-base pl-2">{data.usage}</p>
          </div>

          <div className="flex">
            <p className="text-gray-800 bg-gray-300 text-base font-bold border-r pr-2">
              OPSC Code:
            </p>
            <p className="text-gray-800 text-base pl-2">{data.code}</p>
          </div>

          <div className="flex">
            <p className="text-gray-800 bg-gray-300 text-base font-bold border-r pr-2">
              Gradle Level:
            </p>
            <p className="text-gray-800 text-base pl-2">{data.level}</p>
          </div>

          <div className="flex">
            <p className="text-gray-800 bg-gray-300 color-grey text-base font-bold border-r pr-2 ">
              Interior Square Feet:
            </p>
            <p className="text-gray-800 text-base pl-2">{data.feet}</p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
};

export default InfoBox;
