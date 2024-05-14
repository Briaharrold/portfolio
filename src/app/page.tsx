"use client";
import CardsComponent from "@/Components/CardsComponent";
import FooterComoponent from "@/Components/FooterComoponent";
import NavbarComponent from "@/Components/NavbarComponent";
import PageContentComponent from "@/Components/PageContentComponent";
export default function Home() {
  return (
    <>
      <div className=" text-black  bg-orange-200 jFont">
      <NavbarComponent/>
      <PageContentComponent/>
       <CardsComponent/>
       <FooterComoponent/>
   
      </div>
     
    </>
  );
}
