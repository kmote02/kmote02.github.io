import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const projects = [
  {
    title: "Project One",
    description: "Developed a mathematical model using raw data of percipitation in a region and predicting the gross agricultural yeid .",
    date: "Jan 2022 - Mar 2022",
    icon: "/path/to/icon1.png",
    iconBg: "#232631",
  },
  {
    title: "Project Two",
    description: "Description of Project Two.",
    date: "Apr 2022 - Jun 2022",
    icon: "/path/to/icon2.png",
    iconBg: "#1d1836",
  },
  {
    title: "Project Three",
    description: "Description of Project Three.",
    date: "Jul 2022 - Sep 2022",
    icon: "/path/to/icon3.png",
    iconBg: "#ff6347",
  },
  {
    title: "Project Four",
    description: "Description of Project Four.",
    date: "Oct 2022 - Dec 2022",
    icon: "/path/to/icon4.png",
    iconBg: "#4682b4",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#fefae0", color: "#000",borderRadius:"3%" }} // Background to fefae0 and text to black
      contentArrowStyle={{ borderRight: "7px solid  #fefae0" }} // Arrow to match background
      date={project.date}
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.icon}
            alt={project.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{project.title}</h3> {/* Black title */}
        <p className="text-black text-[16px]" style={{ margin: 0 }}> {/* Black description */}
          {project.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-center">Projects</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Projects;
