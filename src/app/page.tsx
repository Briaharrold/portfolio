"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import logo from "../../public/assets/New Project.png";
import name from "../../public/assets/Bria.png";
import tsIcon from "../../public/assets/ts.webp";
import weatherApp from "../../public/assets/WetherApp.png";
import jsIcon from "../../public/assets/js.webp";
import pokeDex from "../../public/assets/Image 2-5-24 at 8.47 AM.jpg";
import htmlIcon from "../../public/assets/html-1 copy 2.png";
import matIcon from "../../public/assets/material.webp";
import bootIcon from "../../public/assets/bs.webp";
import reactIcon from "../../public/assets/react.webp";
import strikeshoe from"../../public/assets/Screenshot 2024-05-13 at 2.07.22 PM.png"
import flowbiteIcon from "../../public/assets/flowbite.webp";
import SMD from "../../public/SMDpicture.png"
import tailIcon from "../../public/assets/tw.webp";
import CIcon from "../../public/assets/c.webp";
import headShoots from "../../public/assets/Bria_Harrold-Hill_CSAS6_Headshots (1).jpeg";
export default function Home() {
  return (
    <>
      <div className=" text-black  bg-orange-200 jFont">
        <Navbar fluid rounded className=" bg-white ">
          <Navbar.Brand as={Link} href="">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              {" "}
              <img src={name.src} className="w-72 saturate-200" alt="Logo" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="text-end">
            <Navbar.Link
              href=""
              className="text-black text-xl hover:!text-purple-400 hover:underline decoration-wavy underline-offset-8   "
            >
              About
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              className="text-black text-xl hover:!text-purple-400  hover:underline decoration-wavy underline-offset-8"
              href="#myprodjects"
            >
              Projects
            </Navbar.Link>
            <Navbar.Link
              className="text-black text-xl mr-0 lg:mr-20 hover:!text-purple-400  hover:underline decoration-wavy underline-offset-8"
              href="#letsConnect"
            >
              Lets Connect
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <div className="  py-10">
          <div className="grid grid-flow-col-12 lg:grid-flow-col  flex-wrap  gap-5 bg-purple-300  rounded-3xl mx-0 lg:mx-24 px-0 py-0 lg:px-10 lg:py-10  border-purple-100 border-4">
            <div className="px-10">
              <p className="text-black text-5xl text-center jFont  lg:text-start pb-5 ">
                Hey! Im Bria.
              </p>
              <p className="text-white text-bold   text-3xl text-center  jFont   lg:text-start pb-5 ">
                Junior Web Developer
              </p>
              <p className="text-black text-xl jFont  ">
                I've been currently attending school at CodeStack Academy since September
                2023, to futher my knowledge about software engineering. I'm
                excited to translate my knowledge and creative ideas into
                practical applications in the workforce.
              </p>
              <div className="bg-red-300 px-2 py-2 mt-4 mb-4 lg:mt-2 lg:mb-0 rounded-lg">
                <h1 className="text-center text-4xl pt-2 pb-2 underline  ">
                  {" "}
                  My Skill Sets
                </h1>
                <div className="flex flex-wrap  flex-col-3 justify-evenly  order-last   rounded-xl px-0 py-0 lg:px-10 lg:py-10">
                  <div>
                    <h1 className="text-center text-2xl">Frameworks:</h1>
                    <div className=" flex flex-row flex-wrap gap-3 pr-2   pb-5 lg:pb-0 lg:pt-2 pt-5 ">
                      <img
                        src={bootIcon.src}
                        alt="Bootstrap Icon"
                        className="h-8"
                      />

                      <img
                        src={tailIcon.src}
                        alt="Tailwind Icon"
                        className="h-8 hover:"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-center text-2xl ">Libraries:</h1>
                    <div className=" flex flex-row flex-wrap gap-3 pr-2 pb-5 lg:pb-0 lg:pt-2 pt-5">
                      <img
                        src={reactIcon.src}
                        alt="React Icon"
                        className="h-8"
                      />

                      <img
                        src={flowbiteIcon.src}
                        alt="Flowbite Icon"
                        className="h-8"
                      />

                      <img
                        src={matIcon.src}
                        alt="Material IO Icon"
                        className="h-8"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-center text-2xl ">Languages:</h1>
                    <div className=" flex flex-row flex-wrap gap-3 pr-2  pb-5 lg:pb-0 lg:pt-2 pt-5">
                      <img
                        src={jsIcon.src}
                        alt=" Javascript Icon"
                        className="h-8"
                      />

                      <img
                        src={tsIcon.src}
                        alt="Typescript Icon"
                        className="h-8"
                      />

                      <img src={CIcon.src} alt="C# Icon" className="h-8" />
                      <img src={htmlIcon.src} alt="Html icon" className="h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-2 flex justify-center pt-7 pb-7">
              <img
                alt="Bria's Head Shoot photo"
                src={headShoots.src}
                className=" border-indigo-500 border-4 h-80 w-80 object-cover rounded-full "
              />
            </div>
          </div>
        </div>
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
                <a className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:!text-purple-400  hover:underline  underline-offset-8" target="_blank"
                  rel="noopener noreferrer" href="">
                 Social Media Dashboard
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"></p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-300 px-10 py-10 jFont">
        <div className="flex flex-col-2 justify-between">
          <div>
            <p id="letsConnect" className=" text-4xl font-bold underline">
              Lets Connect
            </p>
            <p>Bria Harrold</p>
            <p>209-292-1954</p>
            <h1>Briaharrold@gmail.com</h1>
          </div>
          <div className="flex flex-col gap-5">
            <button><a href="https://github.com/Briaharrold"></a> Github</button>
            <div>
        <a href="https://www.linkedin.com/in/bria-harrold-975379201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"></a> Linked in
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
