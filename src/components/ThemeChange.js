import React, {useState} from 'react';
import '../assets/styles/dark_light.css';

const ThemeChange = () => {

    const [darkTheme , setDarkTheme] = useState("true");

    const themeHandler = () => {
        setDarkTheme(!darkTheme);
    }

    return (

<div className={darkTheme ? "thcontainer" : "darkMode"  }>
      <div className="sky" onClick={themeHandler}>
        <img
          className="moon moonrise"
          src="https://i.postimg.cc/B6cVZTXv/moon.png"
          width="70"
          height="70"
          alt=""
        />
        <img className="sun" src="https://i.postimg.cc/XqjDrrCk/sun.png" width="100" height="100" alt="" />
        <img
          className="clouds clouds-dark"
          src="https://i.postimg.cc/rmLHLnyb/clouds-dark.png"
          width="70"
          alt=""
        />
        <img className="clouds clouds-light" src="https://i.postimg.cc/Xv5PmSWd/clouds.png" width="70" alt="" />
      </div>
    </div>    );
};

export default ThemeChange;