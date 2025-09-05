import { useContext } from "react";
import { LanguageContext } from "../../App";

export default function AboutMe() {
  const { lang } = useContext(LanguageContext);

  const content = {
    es: {
      heading: "Sobre mí",
      p1: "Mi carrera comenzó en PwC, trabajando en impuestos para empresas estadounidenses, donde aprendí a manejar proyectos en equipo con personas de distintos países y a desarrollar una fuerte atención al detalle. Esa experiencia me dio una base profesional sólida que hoy aplico en otro camino que me apasiona: el desarrollo de software.",
      p2: "Actualmente me especializo en desarrollo backend, con formación en la UTN y profundización en .NET y SQL. Me interesa diseñar soluciones mantenibles y escalables, aplicando buenas prácticas de desarrollo y contribuyendo en equipos que fomenten mi crecimiento profesional."
    },
    en: {
      heading: "About Me",
      p1: "My career started at PwC, working in taxes for US companies, where I learned to manage projects with teams across countries and developed strong attention to detail. That experience gave me a solid professional foundation that I now apply to another path I'm passionate about: software development.",
      p2: "I am currently specializing in backend development, studying at UTN and deepening my knowledge in .NET and SQL. I am interested in designing maintainable and scalable solutions, applying best development practices, and contributing in teams that foster my professional growth."
    }
  };

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">{content[lang].heading}</h1>
          <p className="hero--section--description">{content[lang].p1}</p>
          <p className="hero--section--description">{content[lang].p2}</p>
        </div>
      </div>
    </section>
  );
}