import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../App";
import data from "../../Data/index.json";

const CARDS_PER_PAGE = 3;

export default function MyPortfolio() {
  const { lang } = useContext(LanguageContext);
  const [activeTag, setActiveTag] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const allTags = [
    "All",
    ...Array.from(new Set(data.portfolio.flatMap((p) => p.tags || []))),
  ];

  const filtered =
    activeTag === "All"
      ? data.portfolio
      : data.portfolio.filter((p) => p.tags?.includes(activeTag));

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const visibleProjects = filtered.slice(
    currentIndex * CARDS_PER_PAGE,
    currentIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTag]);

  const navigate = (dir) => {
    if (animating) return;
    const nextIndex =
      dir === "next"
        ? Math.min(currentIndex + 1, totalPages - 1)
        : Math.max(currentIndex - 1, 0);
    if (nextIndex === currentIndex) return;

    setDirection(dir === "next" ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setDirection(null);
      setAnimating(false);
    }, 300);
  };

  const goToPage = (i) => {
    if (i === currentIndex || animating) return;
    setDirection(i > currentIndex ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(i);
      setDirection(null);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      {/* Header */}
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">
            {lang === "es" ? "Mi Portafolio" : "My Portfolio"}
          </h2>
        </div>
        <div>
          <a
            href="https://github.com/LautaroPavanSarquis"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: "8px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.832 2.809 1.303 3.495.997.108-.775.418-1.303.76-1.603-2.665-.305-5.467-1.333-5.467-5.93
                0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403
                c1.018.005 2.042.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84
                1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286
                0 .319.192.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            {lang === "es" ? "Visitar mi GitHub" : "Visit My GitHub"}
          </a>
        </div>
      </div>

      {/* Tag Filter */}
      <div className="portfolio--tags">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`portfolio--tag-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="portfolio--carousel--wrapper">
        <button
          className="portfolio--carousel--arrow"
          onClick={() => navigate("prev")}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          className={`portfolio--section--container portfolio--carousel--track ${
            animating ? `slide-out-${direction}` : "slide-in"
          }`}
        >
          {visibleProjects.length > 0 ? (
            visibleProjects.map((item) => (
              <div key={item.id} className="portfolio--section--card">

                {/* Fixed-height image area */}
                <div className="portfolio--section--img portfolio--section--img--fixed">
                  <img src={item.src} alt={item.title[lang]} />
                </div>

                <div className="portfolio--section--card--content">
                  {/* Title + description — scrollable area if text is long */}
                  <div className="portfolio--card--body">
                    <h3 className="portfolio--section--title">{item.title[lang]}</h3>
                    <p className="text-md">{item.description[lang]}</p>
                  </div>

                  {/* Links + icons pinned to bottom */}
                  <div className="portfolio--card--footer">
                    {/* GitHub + deploy links */}
                    <div className="portfolio--links--row">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm portfolio--link"
                      >
                        {item.link}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                          <path
                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                            stroke="currentColor"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>

                      {item.deployUrl && (
                        <a
                          href={item.deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm portfolio--link portfolio--link--deploy"
                        >
                          {lang === "es" ? "Ver deploy" : "Live demo"}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Tech icons below the links */}
                    {item.techIcons && item.techIcons.length > 0 && (
                      <div className="portfolio--tech--icons">
                        {item.techIcons.map((tech) => (
                          <div key={tech.label} className="portfolio--tech--icon--wrapper">
                            <i className={`${tech.icon} portfolio--tech--icon`} />
                            <span className="portfolio--tech--tooltip">{tech.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="portfolio--empty">
              <p className="text-lg">
                {lang === "es"
                  ? "No hay proyectos con este filtro."
                  : "No projects match this filter."}
              </p>
            </div>
          )}
        </div>

        <button
          className="portfolio--carousel--arrow"
          onClick={() => navigate("next")}
          disabled={currentIndex >= totalPages - 1}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      {totalPages > 1 && (
        <div className="portfolio--dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`portfolio--dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
