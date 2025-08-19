import Button from "@/Common/Button/Button";
import { ArrowRight } from "lucide-react";
import React from "react";

const WeDO = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="/bookread.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Support the work we do
        </h2>
        <p className="max-w-2xl mb-6 text-gray-200">
          The Dawah is not just a haphazard enterprise, if done properly one must spend hours researching, filming, studying and writing.
        </p>
       <div className="flex gap-[20px]">
        <Button text="Learn More " icon={ArrowRight} className="!py-2 border border-primary bg-primary"/>
        <Button text="Learn More " icon={ArrowRight} className="!py-2 border border-primary bg-primary"/>
       </div>
      </div>
    </div>
  );
};

export default WeDO;
