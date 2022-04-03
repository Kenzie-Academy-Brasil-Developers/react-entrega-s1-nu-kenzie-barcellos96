import "./styles.css";
import imgstart from "../../assets/imgstart.png";
import nuimg from "../../assets/NuKenzie.png";

function StartPage({ setIsLoggedIn }) {
  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div className="container">
      <section className="section-button">
        <img src={nuimg} alt="imgTitle" />
        <h2 className="title-start">Centralize o controle das suas finanças</h2>
        <p className="slogan">de forma rápida e segura</p>
        <button className="button-start" onClick={handleLogin}>
          Iniciar
        </button>
      </section>

      <section className="section-img">
        <img src={imgstart} alt="imgContext" />
      </section>
    </div>
  );
}

export default StartPage;
