import Profile from "./components/profile";
import Techstack from "./components/Stack";
import {
  backStack,
  frontend,
  back_framworks,
  front_framworks,
} from "./Data/Stacks";
import { Tailwind } from "./TailwindClases";
import anime from "animejs/lib/anime.es.js";
import Navbar from "./components/NavBar";
import { useState } from "react";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProjectInfo from "./components/ProjectsInfo";
import { DesktopProjects, WebProjects } from "./Data/Projects.js";

function App({ toggleDarkmod }) {
  const log = console.log;
  const animation = anime({
    targets: ".TechStacks",
    translatX: 800,

    duration: 4000,
  });
  const [visible, setVisible] = useState(true);
  window.addEventListener("scroll", () => {
    setVisible(true);
  });

  let Desk_projectAmount = DesktopProjects.length;
  let Web_projectAmount = WebProjects.length;
  const [projectNum, setProjectNum] = useState(0);
  const [web_projectNum, setwebProjectNum] = useState(0);

  function nextProject(j) {
    switch (j) {
      case "desk":
        if (projectNum < Desk_projectAmount) {
          setProjectNum((projectNum + 1) % Desk_projectAmount);
        }
        break;
      case "web":
        if (web_projectNum < Web_projectAmount) {
          setwebProjectNum((web_projectNum + 1) % Web_projectAmount);
        }
        break;
    }
  }

  function prevProject(j) {
    switch (j) {
      case "desk":
        if (projectNum < Desk_projectAmount) {
          setProjectNum(
            (projectNum - 1 + Desk_projectAmount) % Desk_projectAmount
          );
        }
        break;
      case "web":
        if (web_projectNum < Web_projectAmount) {
          setwebProjectNum(
            (web_projectNum - 1 + Web_projectAmount) % Web_projectAmount
          );
        }
        break;
    }
  }

  return (
    <div className="App">
      <Navbar toggle={toggleDarkmod} />

      <Profile />
      <h1 className={Tailwind.text.header + " mb-5 mt-50  text-6xl" } id="projects">
        Projects
      </h1>

      <section className={visible ? "Projects lg:m-10 " : "Projects m-10 invisible"}>
        <div className="project--type flex lg:flex-row flex-col items-center">
          <img src={require("./res/web.png")} />
          <h1 className={Tailwind.text.subHeader + " text-center p-10  "}>
            Web Applications
          </h1>
        </div>
        <div className="projects--container0">
          <div className="projects--container p-10  ">
            <div className="image-container">
              <Carousel
                stopOnHover={true}
                width={"100%"}
                dynamicHeight={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
              >
                <div>
                  <img src={WebProjects[web_projectNum].img1} />
                </div>
                <div>
                  <img src={WebProjects[web_projectNum].img2} />
                </div>
                <div>
                  <img src={WebProjects[web_projectNum].img3} />
                </div>
              </Carousel>
            </div>
            <ProjectInfo
              titel={WebProjects[web_projectNum].titel}
              desc={WebProjects[web_projectNum].desc}
              compatible={WebProjects[web_projectNum].compatible}
              stack={WebProjects[web_projectNum].stack}
              dw={WebProjects[web_projectNum].dw}
              src={WebProjects[web_projectNum].src}
              colors={WebProjects[web_projectNum].color}
            />

            <div className="projects--btnContainer lg:absolute  m-auto mt-20 lg:mt-0">
              <button
                className={
                  Tailwind.buttons.Nocolor + " bg-gray-900  h-fit mr-2"
                }
                onClick={() => prevProject("web")}
              >
                Previous
              </button>
              <button
                className={Tailwind.buttons.Nocolor + " bg-gray-900  h-fit"}
                onClick={() => nextProject("web")}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="project--type flex lg:flex-row flex-col items-center">
          <img src={require("./res/desktop.png")} />
          <h1 className={Tailwind.text.subHeader + " text-center p-10  "}>
            Desktop Applications
          </h1>
        </div>
        <div className="projects--container0">
          <div className="projects--container p-10  ">
            <div className="image-container">
              <Carousel
                stopOnHover={true}
                width={"100%"}
                dynamicHeight={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
              >
                <div>
                  <img src={DesktopProjects[projectNum].img1} />
                </div>
                <div>
                  <img src={DesktopProjects[projectNum].img2} />
                </div>
                <div>
                  <img src={DesktopProjects[projectNum].img3} />
                </div>
              </Carousel>
            </div>
            <ProjectInfo
              titel={DesktopProjects[projectNum].titel}
              desc={DesktopProjects[projectNum].desc}
              compatible={DesktopProjects[projectNum].compatible}
              stack={DesktopProjects[projectNum].stack}
              dw={DesktopProjects[projectNum].dw}
              src={DesktopProjects[projectNum].src}
              colors={DesktopProjects[projectNum].color}
            />

            <div className="projects--btnContainer lg:absolute  m-auto mt-20 lg:mt-0">
              <button
                className={
                  Tailwind.buttons.Nocolor + " bg-gray-900  h-fit mr-2"
                }
                onClick={() => prevProject("desk")}
              >
                Previous
              </button>
              <button
                className={Tailwind.buttons.Nocolor + " bg-gray-900  h-fit"}
                onClick={() => nextProject("desk")}
              >
                Next
              </button>
            </div>
          </div>
          <div className="m-auto w-fit flex gap-5 "></div>
        </div>
      </section>
      <h1 className={Tailwind.text.header + " mb-5 mt-50 text-6xl"} id="techstack">
        Skills
      </h1>
      <section className={visible ? "TechStacks lg:m-10" : "TechStacks lg:m-10 invisible"}>
        <h1 className={Tailwind.text.header + " z-99"}>Backend</h1>{" "}
        <h1 className={Tailwind.text.header}></h1>
        <div className="timeline pt-20">
          <div className="container left">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Languages
            </h2>
            <div className="content">
              <Techstack stack={backStack} />
            </div>
          </div>
          <div className="container right">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Framworks
            </h2>

            <div className="content">
              <Techstack stack={back_framworks} />
            </div>
          </div>
        </div>
        <h1 className={Tailwind.text.header + " z-99"}>Frontend</h1>{" "}
        <div className="timeline pt-20">
          <div className="container left">
            {" "}
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              {" "}
              Languages{" "}
            </h2>{" "}
            <div className="content">
              {" "}
              <Techstack stack={frontend} />{" "}
            </div>{" "}
          </div>{" "}
          <div className="container right">
            {" "}
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              {" "}
              Framworks{" "}
            </h2>{" "}
            <div className="content">
              {" "}
              <Techstack stack={front_framworks} />{" "}
            </div>{" "}
          </div>
        </div>
      </section>
    
      <h2  className={Tailwind.text.header + " mb-5"}>Contact</h2>
      <section className="contact" id="contact">


        <div className="contact--SocialMedia  ">
          <a href="https://github.com/cipher450" target="_blank"><img src={require("./res/Github.png")} width="70px"></img></a>
         <a href="https://cipher450.github.io/Cv/"target="_blank"> < img src={require("./res/cv.png")}  width="70px"></img></a>
         <a href="https://www.linkedin.com/in/mustapha-hadjal-20193b233/"target="_blank"><img src={require("./res/linkedin.png")}  width="70px"></img></a>
          
        </div>
        <p className={Tailwind.text.paragraphe}>
          I'm currently available to get involved in new projects, so get in
          touch if you'd like to work together.
        </p>
        <p className={Tailwind.text.paragraphe}>
          Email me at{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:hadjmus99@gmail.com"
          >
            hadjmus99@gmail.com
          </a>{" "}
          and let's talk about your project!
        </p>
        
      </section>
    </div>
  );
}

export default App;
