"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ChevronDown } from "@deemlol/next-icons";
import { useRef } from "react";

export default function Home() {
  // handling scroll
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("cliked");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-grow relative main-div">
        <div className="relative">
          <Image
            src="/visbyStrand.jpg"
            alt="strand promenad visby"
            className="w-full h-auto bg-indingo-500 opacity-50 "
            width={600}
            height={800}
          />
          <div className="absolute inset-0 flex flex-col bg-opacity-30 bg-black">
            <h1 className="p-5 font-bold text-[3rem] text-center text-white animate-flame">
              Wedding 2026
            </h1>
            <h2 className="text-center text-[1rem] text-white">
              Welcome to our wedding
            </h2>
            <div className="absolute bottom-6 left-1/2 transform-translate-x-1/2 animate-bounce">
              <button className="chevronDown" onClick={handleScroll}>
                <ChevronDown size={40} color="#FFFFFF" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={nextSectionRef}
          className="grid grid-cols-2 p-5 justify-center items-center main-div"
        >
          <div className="flex items-center justify-center p-5">
            <Image
              src="/gbg.jpg"
              alt="semester"
              width={300}
              height={300}
              className="image"
            />
          </div>
          <p className="p-5 border-2 rounded-lg text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            repunctio, cum nihil similique cupiditate odit quibusdam. In
            obcaecati, sapiente neque, voluptas, excepturi fugiat mollitia
            inventore incidunt sunt modi nihil pariatur quasi rem. Cupiditate
            nisi, asperiores natus earum consequuntur voluptatum, minima
            accusamus veniam consequatur officiis libero dolorum doloribus quis
            inventore
          </p>
        </div>
        <div className="grid grid-cols-2 p-5 items-center justify-center main-div">
          <div className="flex items-center justify-center p-5">
            <Image
              src="/ostersund.jpg"
              alt="ostersund"
              width={500}
              height={500}
              className="image"
            />
          </div>
          <p className=" p-5 border-2 rounded-lg text-center">
            culpa amet quo esse quidem quibusdam dolor excepturi ex ut
            distinctio. Unde architecto natus id cum, assumenda culpa aliquam
            amet, ut quis laboriosam molestiae cupiditate reiciendis ratione
            veritatis architecto ducimus, aliquid, obcaecati ullam. Aperiam
            fugit autem fuga voluptas sapiente nobis iusto non consequatur unde
            numquam? Sapiente consequuntur sed, odit beatae voluptates
            reiciendis fuga, mollitia
          </p>
        </div>

        <div className="grid grid-cols-2 p-5 items-center main-div">
          <div className="flex items-center justify-center p-5">
            <Image
              src="/midsummer.jpg"
              alt="unsplash"
              width={300}
              height={300}
              className="image"
            />
          </div>
          <p className="p-5 border-2 rounded-lg text-center">
            quod corporis iste nostrum voluptatem ab quidem deleniti delectus
            nobis nihil quisquam! Ipsum ab laborum minima odio odit eveniet
            culpa ducimus labore ullam et unde quos, sint rem ut nesciunt, totam
            sapiente. Ad delectus velit unde repellendus non aliquam ipsa
            consequuntur corporis minus officiis, illum ex, consectetur officiis
            expedita, quos dolor similique quisquam itaque repellat qui et?
            Veniam dolore deserunt voluptas maiores, iusto earum! Illo eaque
            totam laboriosam minus suscipit, voluptas hic sint.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
