import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    es: {
      greeting: "Hey, soy Lauta",
      title: "Full Stack Developer",
      description:
        "Soy un Full Stack Developer, enfocado en construir soluciones eficientes y sostenibles. Creo en las buenas prácticas, en los principios SOLID y, sobre todo, en nunca dejar de aprender.",
      button: "Contactame",
    },
    en: {
      greeting: "Hey, I'm Lauta",
      title: "Full Stack Developer",
      description:
        "I’m a Full Stack Developer, focused on building efficient and sustainable solutions. I believe in best practices, SOLID principles, and above all, never stop learning.",
      button: "Get in touch",
    },
  };

  const { greeting, title, description, button } = texts[lang];

  return (
    <section id="Herosection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">{greeting}</p>
          <h1 className="hero--section--title">{title}</h1>
          <p className="hero--section--description">{description}</p>
        </div>

        {/* Botón + Íconos */}
        <div className="hero--actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              const section = document.getElementById("Contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {button}
          </button>

          <div className="hero--socials">
            <a
              href="https://www.linkedin.com/in/lautaropavan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="linkedin"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/LautaroPavanSarquis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="github"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero section" />
      </div>
    </section>
  );
}