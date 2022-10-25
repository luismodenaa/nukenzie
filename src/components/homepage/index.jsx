import { HomepageImg } from "../homepageImg";
import "./index.css";

export const Homepage = ({ setIsLogged }) => {
  const login = () => {
    setIsLogged(true);
  };

  return (
    <div className="homepage-main">
      <div className="section-homepage">
        <h1>Nu Kenzie</h1>
        <h4>Centralize o controle das suas finanças</h4>
        <p>de forma rápida e segura</p>
        <button onClick={login}>Iniciar</button>
      </div>
      <HomepageImg />
    </div>
  );
};
