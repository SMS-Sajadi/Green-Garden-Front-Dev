import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
// Componnets
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import BackTop from "./components/BackTop";
import Home from "./components/Home";
import Map from "./featurs/MapTest";
import ConfirmCode from './components/ConfirmCode';
import ErrorPage from "./pages/404/ErrorPage";
// Styles
import "./assets/styles/bootstrap.min.css";
import "./templates/unicons.iconscout.com/release/v3.0.6/css/line.css";
import "./assets/styles/style.min.css";
import "./assets/styles/select&second.css";
// Context
export const User = React.createContext();

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://localhost:8000/",
// });

function App() {
  // const [currentUser, setCurrentUser] = useState();
  // const [registerationToggle, setRegisterationToggle] = useState(false);

  return (
    <div>
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/verify" element={<ConfirmCode />} />
          <Route path="/map" element={<Map />} />
          <Route path="/" element={<Navigate to={"/signUp"} />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>

        <BackTop />

    </div>
  );
}

export default App;
