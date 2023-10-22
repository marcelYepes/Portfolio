import "./App.css";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-10 top-1 w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600 dark:bg-slate-800"
      >
        {theme === "dark" ? (
          <ion-icon name="sunny-outline"></ion-icon>
        ) : (
          <ion-icon name="moon-outline"></ion-icon>
        )}
      </button>
      <div className="font iner bg:white dark:bg-slate-900">
        <Sidenav />
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
