import { useState, useEffect, useContext } from "react"; 
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import { ThemeContext, LanguageContext } from "../../App"; 

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const { lang, toggleLang } = useContext(LanguageContext);

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) closeMenu();
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      
      {/* Dark Mode Switch */}
      <div className="switch">
        <label>{theme === "dark" ? "Dark Mode On" : "Dark Mode Off"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>

      {/* Language Switch */}
      <div className="switch lang-switch">
        <label>{lang === "es" ? "ES" : "EN"}</label>
        <button onClick={() => toggleLang(lang === "es" ? "en" : "es")}>
          <img 
            src={lang === "es" ? "/img/es.png" : "/img/en.png"} 
            alt={lang === "es" ? "ES" : "EN"} 
            className="flag-icon"
          />
        </button>
      </div>
  

      {/* Hamburger Menu */}
      <div>
        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>

        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link 
                onClick={closeMenu} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="hero--section"
                className="navbar--content"
              >
                {lang === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="AboutMe"
                className="navbar--content"
              >
                {lang === "es" ? "Sobre mí" : "About Me"}
              </Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="MyPortfolio"
                className="navbar--content"
              >
                {lang === "es" ? "Portafolio" : "Portfolio"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Button */}
      <Link 
        onClick={closeMenu} 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500} 
        className="btn btn-outline-primary"
        to="Contact"
      >
        {lang === "es" ? "Contacto" : "Contact Me"}
      </Link>
    </nav>
  );
}

export default Navbar;