import Profile from "./components/profile";
import Techstack from "./components/Stack";
import { backStack, frontend, back_framworks } from "./Data/Stacks";
import { Tailwind } from "./TailwindClases";
import anime from "animejs/lib/anime.es.js";
import Navbar from "./components/NavBar";
import { useState } from "react";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProjectInfo from "./components/ProjectsInfo";
import { projects } from "./Data/Projects.js";
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

  return (
    <div className="App">
      <Navbar toggle={toggleDarkmod} />

      <Profile />

      <section
        className={visible ? "TechStacks" : "TechStacks invisible"}
        id="techstack"
      >
        <h1 className={Tailwind.text.header}>Skills</h1>

        <div className="timeline pt-20">
          <div className="container left">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Backend
            </h2>
            <div className="content">
              <Techstack stack={backStack} />
            </div>
          </div>
          <div className="container right">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Frontend
            </h2>
            <div className="content">
              <Techstack stack={back_framworks} />
            </div>
          </div>
          <div className="container left">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Frontend
            </h2>
            <div className="content">
              <Techstack stack={backStack} />
            </div>
          </div>
          <div className="container right">
            <h2 className={Tailwind.text.subHeader + Tailwind.colors.textblack}>
              Frontend
            </h2>
            <div className="content">
              <Techstack stack={frontend} />
            </div>
          </div>
        </div>
      </section>

      <section
        className={visible ? "Projects " : "Projects invisible"}
        id="projects"
      >
        <h1 className={Tailwind.text.header + " mb-5"}>Projects</h1>
        <div className="projects--container p-20  ">
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
                <img src="https://user-images.githubusercontent.com/102109601/203129620-6e6bc160-42e2-4eb4-bbd8-3075a0a30303.PNG" />
              </div>
              <div>
                <img src="https://user-images.githubusercontent.com/102109601/203129649-6f7d2c7b-c718-4343-a302-ec2f17f7aa4c.PNG" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
          <ProjectInfo
            titel={projects[0].titel}
            desc={projects[0].desc}
            compatible={projects[0].compatible}
            stack={projects[0].stack}
            dw={projects[0].dw}
            src={projects[0].src}
            colors={projects[0].color}
          />
        </div>
        <div className="m-auto w-fit flex gap-5">
          <div className={Tailwind.buttons.Nocolor}>Previous</div>
          <div className={Tailwind.buttons.Nocolor}>Next</div>
        </div>
      </section>

      <section className="contact"></section>
    </div>
  );
}

export default App;
