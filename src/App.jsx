import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className=" relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
