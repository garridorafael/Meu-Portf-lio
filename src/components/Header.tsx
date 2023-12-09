import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import perfil from '../assets/images/foto-perfil.jpg'
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setCurrentPage(location.pathname);
  }, 0);

  return () => clearTimeout(timeoutId);
}, [location.pathname]);

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  const handleNavigateToHome = () => {
    navigate("/");
  };
  return (
    <header className="fixed top-0 w-screen p-4 bg-[#727797] z-[1] bg-opacity-70 pl-8 pr-8 mobile:pl-2 mobile:pr-3 box-border">
      <nav className="flex flex-row justify-between max-w-[1400px] z-[2]">
        <div className="flex gap-3 items-center">
          <img
            src={perfil}
            alt="foto de perfil"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <p className="text-white font-bold mobile:hidden">Rafael Garrido</p>
        </div>
        <div className="text-white flex flex-row gap-4">
          <button onClick={handleNavigateToHome}>Home</button>
          {currentPage !== "/contact" && (
            <Link to="projetos" smooth={true} duration={500} className="p-0 m-0 flex items-center">
              <button>Projetos</button>
            </Link>
          )}

            <button onClick={handleNavigateToContact}>
              Contate-me
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
