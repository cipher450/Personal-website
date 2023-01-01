import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Profile() {
  return (
    <div>
      <div className="hero flex">
        <img src={require("./imgs/pdp.jpg")} className="rounded-full max-w-45" width={450}/>

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

          <p className="mb-5 mt-2 p-2 text-2xl font-semibold  text-black-500 md:text-xl dark:text-black-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ex
            sint inventore cupiditate excepturi nobis, et dolor sequi architecto
            incidunt aliquid repellat ipsam voluptas fuga laudantium ut
            voluptate dignissimos accusantium!
          </p>
        </div>
      </div>
    </div>
  );
}
