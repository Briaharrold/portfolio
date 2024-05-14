import React from "react";
import { Card } from "flowbite-react";
import pokeDex from "../../public/assets/Image 2-5-24 at 8.47 AM.jpg";
import strikeshoe from "../../public/assets/Screenshot 2024-05-13 at 2.07.22 PM.png";
import SMD from "../../public/assets/Advice.png";
const CardsComponent = () => {
  return (
    <>
      <div className="">
        <h1
          className="text-center pb-5 text-5xl text underline"
          id="myprodjects"
        >
          Projects
        </h1>
        <div className="flex flex-wrap justify-evenly pb-5">
          <div className="">
            <Card
              className="max-w-sm px-5 py-5  mt-5 mb-5"
              renderImage={() => (
                <img
                  width={500}
                  className="rounded-xl  h-60 "
                  src={pokeDex.src}
                  alt="image 1"
                />
              )}
            >
              <a
                href="https://pokemonremake2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white hover:!text-purple-400 cursor-pointer  hover:underline  underline-offset-8"
              >
                PokeDex
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm px-5 py-5 mt-5 mb-5"
              renderImage={() => (
                <img
                  width={342}
                  height={235}
                  className="rounded-xl h-60"
                  src={strikeshoe.src}
                  alt="image 1"
                />
              )}
            >
              <a
                href=" https://full-stack-strike-showdown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-center font-bold tracking-tight cursor-pointer text-gray-900 dark:text-white hover:!text-purple-400  hover:underline  underline-offset-8"
              >
                Strike Showdown
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm px-5 py-5 mt-5 mb-5"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  className="rounded-xl  h-60"
                  src={SMD.src}
                  alt="image 1"
                />
              )}
            >
              <a
                className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:!text-purple-400  hover:underline  underline-offset-8"
                target="_blank"
                rel="noopener noreferrer"
                href="https://advicegenerator-xi.vercel.app/"
              >
                Advice Genorator
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsComponent;
