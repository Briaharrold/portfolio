"use client"
import React from 'react'

const FooterComoponent = () => {
  return (
   <>
    <div className="bg-red-300 px-10 py-10 jFont">
        <div className="flex flex-col-2 justify-between">
          <div>
            <p id="letsConnect" className=" text-4xl font-bold underline">
              Lets Connect
            </p>
            <p>Bria Harrold</p>
            <p>209</p>
            <h1>Briaharrold@gmail.com</h1>
          </div>
          <div className="flex flex-col gap-5 justify-center">
          <a className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:!text-black  hover:underline  underline-offset-8" target="_blank"
                  rel="noopener noreferrer" href="https://github.com/Briaharrold">
         GitHub
                </a>
            <div>
              <div>
              {/* <img src={git.src} className="h-14" alt="github link"></img> */}
            <a className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:!text-black  hover:underline  underline-offset-8" target="_blank"
                  rel="noopener noreferrer" href="https://www.linkedin.com/in/bria-harrold-975379201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
         LinkedIn
                </a>
                <h1 className="text-center"> </h1> 
                </div>

        </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default FooterComoponent
