import { Routes, Route, Navigate } from "react-router-dom";
// Componnets
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ConfirmCode from "./components/ConfirmCode";
import BackTop from "./components/BackTop";
import Home from "./components/Home";
// Styles
import "./assets/styles/bootstrap.min.css";
import "./templates/unicons.iconscout.com/release/v3.0.6/css/line.css";
import "./assets/styles/style.min.css";
import "./assets/styles/select&second.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/signUp/verify" element={<ConfirmCode />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Navigate to={"/signUp"} />} />
      </Routes>

      <BackTop />
    </div>
  );
}

export default App;
