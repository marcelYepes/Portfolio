import "./App.css"
import Contact from "./components/Contact"
import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from "./components/Sidenav"
import About from "./components/About"

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
