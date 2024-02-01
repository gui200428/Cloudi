import Dropfile from "./components/dropfile"
import Files from "./components/files"
import About from "./components/about";
import "./App.css";
import Settings from "./components/settings";
function App() {

  return (
    <>
    <div className="components">
    <Dropfile />
    <Files />
    <About />
    <Settings />
    </div>
    </>
  )
}

export default App
