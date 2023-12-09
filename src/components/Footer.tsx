import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex bg-[#727797] z-[1] bg-opacity-90 w-screen pt-2 pb-2 text-white mobile:text-[12px] bottom-0 box-border mt-[20px]">
      <div className="flex flex-row justify-around max-w-[1400px] w-[95%]">
        <p>Desenvolvido por Rafael Garrido</p>
        <p>Copyright &copy; {year} Rafael Garrido</p>
        <div className="flex flex-row gap-4 text-[20px] mobile:hidden">
          <a
            href="https://www.github.com/garridorafael"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/garrido-rafael/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
