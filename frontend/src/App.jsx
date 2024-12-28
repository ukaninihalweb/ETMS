import { useState } from "react";

import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Aboutus from "./Components/Aboutsus/Aboutus.jsx";
import Contactus from "./Components/Contactus/Contactus.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const login = localStorage.getItem("login");
  const renderScreen = login ? "home" : "login";
  const [screen, setScreen] = useState(renderScreen);
  console.log(screen)
  const displayPage = () => {
    switch (screen) {
      case "login":
        return <Login setScreen={setScreen} screen={screen} />;
        break;
      case "home":
        return <Home setScreen={setScreen} screen={screen} />;
        break;
      case "signup":
        return <Signup setScreen={setScreen} screen={screen} />;
        break;
      case "aboutus" :
        return <Aboutus  setScreen={setScreen} screen={screen}/>
      case "contactus" :
        return <Contactus  setScreen={setScreen} screen={screen}/>
      default:
        return <p>Not Found</p>;
        break;
    }
  };

  return (
    <>
      {login && <Header setScreen={setScreen}/>}
      {displayPage()}
      {login && <Footer  setScreen={setScreen}/>}
    </>
  );
}

export default App;
