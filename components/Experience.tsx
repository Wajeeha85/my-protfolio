import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 flex justify-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="text-black dark:text-white border border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-6 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5 text-start">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
