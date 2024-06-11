import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> */}
      <Home/>
    </div>
  );
}

export default App;
