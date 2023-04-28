import { Routes, Route, Navigate } from "react-router-dom";
// Componnets
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ConfirmCode from "./components/ConfirmCode";
import BackTop from "./components/BackTop";
import Home from "./components/Home";

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
