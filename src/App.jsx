import "./App.css"
import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from "./components/Sidenav"


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
    </div>
  )
}

export default App
