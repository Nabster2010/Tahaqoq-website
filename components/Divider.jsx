import React from "react";

const Divider = ({ title, animation }) => {
  return (
    <div className="relative pt-16 text-center" data-aos={animation}>
      <h1 className="text-3xl font-extrabold text-black ">{title}</h1>
      <div className="my-4 flex items-center justify-center overflow-hidden rounded-sm ">
        <span className="bg-primary h-[4px]  w-12"></span>
        <span className="bg-secondary h-[4px] w-12"></span>
        <span className="bg-primary h-[4px] w-12"></span>
      </div>
    </div>
  );
};

export default Divider;
