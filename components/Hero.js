import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programador
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Python.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Estudante 
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            de Direito.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                
              </svg>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
