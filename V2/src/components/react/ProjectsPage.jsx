import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import { webProjects, desktopProjects, bots } from "../../Data/Projects";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenPopup = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects">
      <div className="projects--container">
        <div className="flex m-auto gap-5 items-center justify-start">
          <img src="/assets/logos/Webapp.svg" alt="" className="lg:w-32 w-12" />
          <h1 className="lg:text-5xl text-2xl text-center m-2">
            Web applications
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {webProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              color={project.backgroundColor}
              onClick={() => handleOpenPopup(project)}
            />
          ))}
        </div>
      </div>

      <div className="projects--container">
        <div className="flex m-auto gap-5 items-center justify-start">
          <img
            src="/assets/logos/desktop.svg"
            alt=""
            className="lg:w-32 w-12"
          />
          <h1 className="lg:text-5xl text-2xl text-center m-2">
            Desktop applications
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {desktopProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              color={project.backgroundColor}
              onClick={() => handleOpenPopup(project)}
            />
          ))}
        </div>
      </div>

      <div className="projects--container">
        <div className="flex m-auto gap-5 items-center">
          <img src="/assets/logos/bot.svg" alt="" width="100px" />
          <h1 className="lg:text-5xl text-4xl text-center mb-5 mt-5">Bots</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {bots.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              color={project.backgroundColor}
              onClick={() => handleOpenPopup(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectPopup
          title={selectedProject.title}
          description={selectedProject.description}
          images={selectedProject.images}
          color={selectedProject.backgroundColor}
          onClose={handleClosePopup}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
