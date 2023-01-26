import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Profile() {
  return (
    <div className=" mb-50">
      <div className="hero flex ">
        <img
          src={require("./imgs/pdp.jpg")}
          className="rounded-full max-w-45"
          width={450}
        />

        <div className="hero--inner m-auto">
          <h1 className="sm:text-4xl  mt-5 sm:text-left mb:text-centre  ">
            Hello 👋 my name is
          </h1>
          <h1 className="sm:text-6xl sm:font-black sm:text-left mb:text-centre ">
            Mustapha hadjal
          </h1>
          <h1 className="text-left ml-2 sm:text-3xl sm:text-left mb:text-centre">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", // Types 'One'
                2000, // Waits 1s
                "Malware analyst", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Knowledge seeker",
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
            />
          </h1>

          <p className="mb-5 mt-2 p-2 text-2xl font-normal text-left  text-black-500 md:text-xl dark:text-black-400 mt-5">
            I am a passionate programmer. I have been coding since a young age
            and have always had a love for technology and problem-solving. I
            take pride in creating beautiful and efficient code, and I am always
            eager to take on new projects and challenges.
            <blockquote>
            Programs must be written for people to read, and only incidentally for machines to execute.<p> - Harold Abelson and Gerald Jay Sussman</p>
            </blockquote>
          </p>
        </div>
      </div>
    </div>
  );
}
