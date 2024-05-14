import React from 'react'

import tsIcon from "../../public/assets/ts.webp";
import jsIcon from "../../public/assets/js.webp";
import htmlIcon from "../../public/assets/html-1 copy 2.png";
import matIcon from "../../public/assets/material.webp";
import bootIcon from "../../public/assets/bs.webp";
import reactIcon from "../../public/assets/react.webp";
import tailIcon from "../../public/assets/tw.webp";
import flowbiteIcon from "../../public/assets/flowbite.webp";
import CIcon from "../../public/assets/c.webp";
import headShoots from "../../public/assets/Bria_Harrold-Hill_CSAS6_Headshots (1).jpeg";

const PageContentComponent = () => {
  return (
    <>
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
                    Ive been currently attending school at CodeStack Academy since September
                    2023, to futher my knowledge about software engineering. Im
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
                            loading="lazy"
                            decoding="async"
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
    </>
  )
}

export default PageContentComponent
