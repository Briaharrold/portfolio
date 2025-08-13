"use client"
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { Navbar } from "flowbite-react";
import name from "../../public/assets/Bria.png";
const NavbarComponent = () => {
  return (
   <>
    <Navbar fluid rounded className=" bg-white ">
          <Navbar.Brand as={Link} href="">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              {" "}
              <img src={name.src} className="w-24 rounded-full saturate-200" alt="Logo" />
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
        
   </>
  )
}

export default NavbarComponent