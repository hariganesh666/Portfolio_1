import React from "react";
import AboutImg from "../../assets/about.png";
function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 py-5 ">
        <img src={AboutImg} />
      </div>
      <div className="md:1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white px-11">
          <h1 className="text-4xl  border-b-4 border-[#3483eb] mb-5 w-[180px] font-bold">
            About Me
          </h1>
          <p className="pb-5">
            Hi, My name is Hari Ganesh. I am a frontend developer. I built
            Websites with React.js and Tailwind CSS{" "}
          </p>
          <p className="pb-5 ">
            I am proficient in Frontend skills like Reactjs,Redux ,Redux
            Toolkit, Axios,Tailwind CSS, SaSS, css3 and manymore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
