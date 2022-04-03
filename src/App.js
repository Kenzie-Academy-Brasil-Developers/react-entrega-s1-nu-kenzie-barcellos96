import { useState } from "react";
import StartPage from "./componentes/StartPage";
import Form from "./componentes/Form";
import List from "./componentes/List";
import "./styles.css";
import NoTransactions from "../src/assets/NoTransactions.png";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Form
            setIsLoggedIn={setIsLoggedIn}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          {listTransactions[0] === undefined ? (
            <img src={NoTransactions} alt="teste" className="noTransactions" />
          ) : (
            <List listTransactions={listTransactions} />
          )}
        </>
      ) : (
        <StartPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
