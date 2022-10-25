import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Homepage } from "./components/homepage";
import { Dashboard } from "./components/dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const notify = () => {
    toast.info("testando essa porr", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="App">
      <ToastContainer />
      {isLogged ? (
        <Dashboard setIsLogged={setIsLogged} />
      ) : (
        <Homepage setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
