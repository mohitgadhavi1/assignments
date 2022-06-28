import "./App.css";
import { useState } from "react";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {!login && <Signup setLogin={setLogin} />}
      {login && <Home />}
    </div>
  );
}

export default App;
