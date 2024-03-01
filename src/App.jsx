import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className=" relative z-0">
        <div>
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
