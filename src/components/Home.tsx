import Particle from "../particles";
import Header from "./Header";
import Typing from "./Typing";
import Lottie from "lottie-react";
import animationData from "../assets/animations/working.json";
import animationData2 from "../assets/animations/working2.json";
import Projects from "./Projetos";
import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/garridorafael/repos`)
        setProjects(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do GitHub:', error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="flex flex-col box-border">
      <Particle />
      <Header />
      <main className="text-indigo-500 text-4xl mt-[100px] h-[100%] flex  flex-col justify-between box-border">
        <div className="flex columns-2 gap-6 justify-around mobile:flex-wrap">
          <div className="flex flex-col justify-center max-w-[600px] w-full">
            <h1 className="text-6xl mobile:text-4xl text-white ml-[45px]">
              Olá!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <p className="text-6xl mobile:text-4xl text-indigo-500">
              Eu sou o <span className="font-bold">Rafael Garrido</span>
            </p>
            <Typing />
          </div>
          <div>
            <Lottie
              animationData={animationData2}
              loop={true}
              className="max-w-[410px] w-full max-h-[410px] h-full"
            />
          </div>
        </div>
        <section className="text-white box-border p-4">
          <h2 className="text-6xl mb-[50px] mt-[30px]">Sobre Mim</h2>
          <div className="flex columns-2 justify-around items-center mobile:flex-wrap">
            <div>
              <Lottie
                animationData={animationData}
                loop={true}
                className="max-w-[330px] w-full max-h-[330px] h-full"
              />
            </div>
            <div className="flex flex-col text-[30px] w-[100%] max-w-[600px] gap-5 text-start">
              <p>
                {"  "}Meu nome é{" "}
                <span className="text-indigo-500 font-medium">Rafael Garrido</span> e sou
                formado em{" "}
                <span className="text-indigo-500 font-medium">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                pela Universidade Paulista - UNIP, atualmente estou cursando
                <span className="text-indigo-500 font-medium">
                  {" "}
                  Desenvolvimento web Fullstack
                </span>{" "}
                na Kenzie Academy Brasil.
              </p>
              <p>
                {"  "}Tenho proficiência em diversas linguagens de programação
                como <span className="text-indigo-500 font-medium">JavaScript</span>,{" "}
                <span className="text-indigo-500 font-medium">Python</span>,
                <span className="text-indigo-500 font-medium"> HTML</span> ,{" "}
                <span className="text-indigo-500 font-medium">CSS</span>. Também tenho
                proficiência em diversos frameworks e bibliotecas como{" "}
                <span className="text-indigo-500 font-medium">NodeJS</span>,{" "}
                <span className="text-indigo-500 font-medium">NestJS</span>,{" "}
                <span className="text-indigo-500 font-medium">ReactJS</span>,
                <span className="text-indigo-500 font-medium"> Django</span>,{" "}
                <span className="text-indigo-500 font-medium">Prisma</span>,{" "}
                <span className="text-indigo-500 font-medium">Tailwind</span> e{" "}
                <span className="text-indigo-500 font-medium">Styled Components</span>.
              </p>
              <p>
                {"  "}Sempre que possível, gosto de aplicar minha paixão por
                desenvolver produtos com essas bibliotecas e Frameworks. No meu
                tempo livre, gosto de aprender novas tecnologias e construir
                novas aplicações e produtos web.
              </p>
            </div>
          </div>
        </section>
        <Projects projects={projects}/>
      </main>
      <Footer />
    </section>
  );
};

export { Home };
