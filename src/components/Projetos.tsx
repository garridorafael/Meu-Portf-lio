import { Fade, Zoom } from "react-awesome-reveal";

interface ProjectProps {
  name: string;
  html_url: string;
}

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <section id="projetos" className="flex flex-col items-center">
      <Zoom cascade direction="left" damping={2.0} className="text-6xl text-white mt-8 mb-8">
        <Fade cascade direction="left" damping={0.2}>
          Projetos
        </Fade>
      </Zoom>
      <ul className="flex flex-row flex-wrap justify-center gap-3 columns-3 w-full max-w-[1000px] h-[500px] box-border overflow-y-auto border-2 border-indigo-500 rounded-[30px] p-4 mobile:p-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="border-2 rounded-[8px] w-[300px] h-[130px] text-[20px] hover:scale-[0.9] hover:[box-shadow:0px_-1px_5px_9px_rgba(94,98,231,0.64)] hover:ease-in transition duration-150"
          >
            <h4 className="text-white">{project.name}</h4>
            <a href={project.html_url} target="_blank">
              Ver mais
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
