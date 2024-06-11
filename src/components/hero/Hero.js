import React from "react";
import HeroImg from "../../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
function Hero() {
  return (
    <section id="hero" className="bg-primary">
      <div className="flex flex-col md:flex-row px-5 py-32 justify-center">
        <div className="md:w-1/2 flex-col ">
        <div className="flex md:justify-start justify-center">
        <h1 className=" text-white text-6xl  ">
            Hi,
            <br /> Im <span className="text-black">Hari Ganesh</span>
            <p className="text-2xl">I am Front-end developer</p>
          </h1>
        </div>
          
          <div className="flex md:justify-start justify-center py-10 ">
            <a href="#" className="pr-5 hover:text-white">
              <AiOutlineTwitter size={40} />
            </a>
            <a href="#" className="pr-5 hover:text-white">
              {" "}
              <AiOutlineFacebook size={40} />
            </a>
            <a href="#" className="hover:text-white">
              <AiOutlineLinkedin size={40} />
            </a>
          </div>
        </div>

        <img className="md:w-1/3 " src={HeroImg} />
      </div>
    </section>
  );
}

export default Hero;
