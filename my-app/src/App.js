import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./View/Home/home";
import Login from "./View/Login/Login"; // Import the Login component
import Register from "./View/Register/Register"; // Import the Register component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Route for the login page */}
        <Route path="/register" element={<Register />} /> {/* Route for the register page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;