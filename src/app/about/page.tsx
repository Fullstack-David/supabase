import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        <div className="relative">
          <Image
            src={"/gamePic.jpg"}
            alt={"google"}
            width={1500}
            height={1000}
            className="desktop-image"
          />
        </div>
        <div className="absolute inset-0 flex flex-col ml-[5rem] mt-[10rem]">
          <ul className="grid grid-col-2 gap-2 text-white">
            How long have we been together?
            <li className="text-white flex-items-center">
              <input type="checkbox" id="option1" />
              <label htmlFor="option1" className="ml-2">
                3 yrear
              </label>
            </li>
            <li className="text-white">
              <input type="checkbox" id="option-2" />
              <label htmlFor="option2" className="ml-2">
                5 years
              </label>
            </li>
            <li className="text-white">
              <input type="checkbox" id="option3" />
              <label htmlFor="option3" className="ml-2">
                7 years
              </label>
            </li>
            <li className="text-white">
              <input type="checkbox" id="option4" />
              <label htmlFor="option4" className="ml-2">
                Forever
              </label>
            </li>
            <button className="border-indingo-500 bg-blue-500 w-[6rem] rounded mt-[1rem] py-1.5">
              Submit
            </button>
          </ul>
        </div>
        {/* <div>
          <div className="absolute inset-0 flex flex-col ml-[5rem] mt-[28rem]">
            <ul className="grid grid-col-2 gap-2 text-white">
              How long have we been together?
              <li className="text-white flex-items-center">
                <input type="checkbox" id="option1" />
                <label htmlFor="option1" className="ml-2">
                  3 yrear
                </label>
              </li>
              <li className="text-white">
                <input type="checkbox" id="option-2" />
                <label htmlFor="option2" className="ml-2">
                  5 years
                </label>
              </li>
              <li className="text-white">
                <input type="checkbox" id="option3" />
                <label htmlFor="option3" className="ml-2">
                  7 years
                </label>
              </li>
              <li className="text-white">
                <input type="checkbox" id="option4" />
                <label htmlFor="option4" className="ml-2">
                  Forever
                </label>
              </li>
              <button className="border-indingo-500 bg-blue-500 w-[6rem] rounded mt-[1rem] py-1.5">
                Submit
              </button>
            </ul>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
