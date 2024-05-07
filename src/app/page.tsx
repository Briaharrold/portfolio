"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import logo from "../../public/assets/New Project.png";
import name from "../../public/assets/Bria.png";
import tsIcon from "../../public/assets/ts.webp";
import weatherApp from "../../public/assets/WetherApp.png"
import jsIcon from "../../public/assets/js.webp";
import pokeDex from "../../public/assets/Image 2-5-24 at 8.47 AM.jpg"
import htmlIcon from "../../public/assets/html-1 copy 2.png";
import matIcon from "../../public/assets/material.webp";
import bootIcon from "../../public/assets/bs.webp";

import reactIcon from "../../public/assets/react.webp";

import flowbiteIcon from "../../public/assets/flowbite.webp";

import tailIcon from "../../public/assets/tw.webp";
import CIcon from "../../public/assets/c.webp";
import headShoots from "../../public/assets/Bria_Harrold-Hill_CSAS6_Headshots (1).jpeg";
export default function Home() {
  return (
    <>
      <div className=" text-black  bg-purple-200 jFont">
        <Navbar fluid rounded className=" bg-white ">
          <Navbar.Brand as={Link} href="">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              {" "}
              <img
                src={name.src}
                className="w-72 saturate-200"
                alt="Flowbite React Logo"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="text-end">
            <Navbar.Link
              href="#"
              className="text-black text-xl hover:!text-purple-400 hover:underline decoration-wavy underline-offset-8   "
            >
              About
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              className="text-black text-xl hover:!text-purple-400  hover:underline decoration-wavy underline-offset-8"
              href="#"
            >
              Projects
            </Navbar.Link>
            <Navbar.Link
              className="text-black text-xl mr-0 lg:mr-20 hover:!text-purple-400  hover:underline decoration-wavy underline-offset-8"
              href="#"
            >
              Let's Connect
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <div className="  py-10">
          <div className="grid grid-flow-col-12 lg:grid-flow-col  flex-wrap  gap-5 bg-purple-300  rounded-3xl mx-0 lg:mx-24 px-0 py-0 lg:px-10 lg:py-10  border-purple-100 border-4">
            <div className="px-10">
              <p className="text-black text-5xl text-center jFont  lg:text-start pb-5 ">
                Hey! I'm Bria.
              </p>
              <p className="text-white text-bold   text-3xl text-center  jFont   lg:text-start pb-5 ">
                Junior Web Developer
              </p>
              <p className="text-black text-xl jFont  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse
                corporis mollitia, similique consectetur itaque asperiores
                consequatur laudantium nihil, exercitationem commodi ullam
                tempore reprehenderit nam, illum rem ex saepe harum.
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
                    <img src={bootIcon.src} className="h-8"></img>

                    <img src={tailIcon.src} className="h-8 hover:"></img>
                  </div>
                </div>
                <div>
                  <h1 className="text-center text-2xl ">Libraries:</h1>
                  <div className=" flex flex-row flex-wrap gap-3 pr-2 pb-5 lg:pb-0 lg:pt-2 pt-5">
                    <img src={reactIcon.src} className="h-8"></img>

                    <img src={flowbiteIcon.src} className="h-8"></img>

                    <img src={matIcon.src} className="h-8"></img>
                  </div>
                </div>
                <div>
                  <h1 className="text-center text-2xl ">Languages:</h1>
                  <div className=" flex flex-row flex-wrap gap-3 pr-2  pb-5 lg:pb-0 lg:pt-2 pt-5">
                    <img src={jsIcon.src} className="h-8"></img>

                    <img src={tsIcon.src} className="h-8"></img>

                    <img src={CIcon.src} className="h-8"></img>
                    <img src={htmlIcon.src} className="h-8"></img>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-2 flex justify-center pt-7 pb-7">
              <img
                src={headShoots.src}
                className=" border-indigo-500 border-4 h-80 w-80 object-cover rounded-full "
              ></img>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center pb-5 text-5xl text underline">Projects</h1>
          <div className="flex flex-wrap justify-evenly">
            <div>
              <Card
                className="max-w-sm px-5 py-5 mt-5 mb-5"
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    className="rounded-xl"
                    src={pokeDex.src}
                    alt="image 1"
                  />
                )}
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white hover:!text-purple-400  hover:underline  underline-offset-8">
                 PokeDex
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
              </Card>
            </div>
            <div>
              <Card
                className="max-w-sm px-5 py-5 mt-5 mb-5"
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    className="rounded-xl"
                    src={weatherApp.src}
                    alt="image 1"
                  />
                )}
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white hover:!text-purple-400  hover:underline  underline-offset-8">
                 Weather Application
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
              </Card>
            </div>
            <div>
            <Card
                className="max-w-sm px-5 py-5 mt-5 mb-5"
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    className="rounded-xl"
                    src={weatherApp.src}
                    alt="image 1"
                  />
                )}
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white hover:!text-purple-400  hover:underline  underline-offset-8">
                 Weather Application
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-300">
<h1></h1>
      </div>
    </>
  );
}
