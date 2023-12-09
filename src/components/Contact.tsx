import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Particle from "../particles";
import Header from "./Header";
import perfil from '../assets/images/foto-perfil.jpg'

const ContactMe = () => {
    const email = "rgarrido846@gmail.com";
  return (
    <section className="flex flex-col justify-center items-center max-w-[1400px] w-full">
        <Particle />
        <Header />
      <h2 className="text-6xl mobile:text-4xl text-white mb-12 mt-[100px]">Contate-me</h2>
      <div className="max-w-[1000px] w-full flex mobile:flex-col mobile:h-[400px] flex-row items-center justify-between">
        <img
          src={perfil}
          alt="foto de perfil"
          className="w-[250px] h-[250px] mobile:w-[200px] mobile:h-[200px] rounded-full object-cover"
        />
        <div className="flex flex-col items-center mobile:p-2">
          <p className="text-white text-2xl">
            Estou disponível nas seguintes redes sociais. Você pode me enviar
            uma mensagem
          </p>
          <div className="flex flex-row gap-6  text-white mt-8 text-[40px]">
          <a
            href="https://www.github.com/garridorafael"
            target="_blank"
            rel="noreferrer noopener"
            
          >
            <FaGithub className="hover:scale-[1.1] hover:[box-shadow:0px_0px_5px_8px_rgba(255,255,255,0.72)] hover:rounded-full"/>
          </a>
          <a
            href="https://www.linkedin.com/in/garrido-rafael/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:scale-[1.1] hover:[box-shadow:0px_0px_5px_8px_rgba(255,255,255,0.72)]"
          >
            <FaLinkedin />
          </a>
          <a href={`mailto:${email}`} >
          <IoMdMail className="hover:scale-[1.1] hover:[box-shadow:0px_0px_5px_8px_rgba(255,255,255,0.72)]"/>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
