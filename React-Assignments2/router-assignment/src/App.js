import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;                       