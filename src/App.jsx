import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Project,
  Tech,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className=" relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>
        {/* <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}
        <Project />
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        ></div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
