import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/HomeScreen";
import HeroSection from "./Pages/Home/HeroSection";

// Contexts
export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light"); // modo claro por defecto
  const [lang, setLang] = useState("en"); // idioma por defecto

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const toggleLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, toggleLang }}>
        <div className="App" id={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Router>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;