import "./App.css";
import { useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";

function App() {
  const [login, setLogin] = useState(false);
  console.log(
    localStorage.getItem("Email") === null &&
      localStorage.getItem("Password") === null
  );
  console.log(localStorage.getItem("Email"));

  return (
    <div className="App">
      {!login &&
        (localStorage.getItem("Email") === null &&
        localStorage.getItem("Password") === null ? (
          <Signup setLogin={setLogin} />
        ) : (
          <Signin setLogin={setLogin} />
        ))}
      {login && <Home setLogin={setLogin}/>}
    </div>
  );
}

export default App;
