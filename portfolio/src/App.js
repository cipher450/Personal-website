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

  let projectAmount = projects.length
  const [projectNum,setProjectNum]=useState(0)
 
  function nextProject(){
    if(projectNum<projectAmount){
      console.log(projectNum)
      setProjectNum(projectNum+1)
      console.log(projectNum)
     
     
    }
   
  }
 
 function prevProject(){
   
    if(projectNum<projectAmount){
      setProjectNum(projectNum-1)
      console.log(projectNum)
    }
   
 
   
   
  }

  
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
                <img src={projects[projectNum].img1} />
              </div>
              <div>
                <img src={projects[projectNum].img2} />
              
              </div>
              <div>
                <img src={projects[projectNum].img3}/>
              
              </div>
            </Carousel>
          </div>
          <ProjectInfo
            titel={projects[projectNum].titel}
            desc={projects[projectNum].desc}
            compatible={projects[projectNum].compatible}
            stack={projects[projectNum].stack}
            dw={projects[projectNum].dw}
            src={projects[projectNum].src}
            colors={projects[projectNum].color}
          />
        </div>

        <div className="m-auto w-fit flex gap-5">
          <button className={Tailwind.buttons.Nocolor} onClick={prevProject} >Previous</button>
          <button className={Tailwind.buttons.Nocolor} onClick={nextProject}>Next</button>
        </div>

      </section>

      <section className="contact" id="contact">
      <h2 className={Tailwind.text.subHeader + " text-left"}>Get in touche with me</h2>
      <p className={Tailwind.text.paragraphe}>I'm currently available to get involved in new projects, so get in touch if you'd like to work together.</p>
      <p className={Tailwind.text.paragraphe} >Email me at <a href="mailto:hadjmus99@gmail.com">hadjmus99@gmail.com</a> and let's talk about your project!</p>
     
      </section>
    </div>
  );
}

export default App;
