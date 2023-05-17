import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Register from "./pages/register";
import Login from "./pages/login";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;                       
