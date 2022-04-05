import "./styles.css";
import { useState } from "react";

import NoTransactions from "../src/assets/NoTransactions.png";
import StartPage from "./componentes/StartPage";

import Form from "./componentes/Form";
import List from "./componentes/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  console.log(listTransactions);

  const [listFilterTransactions, setListFilterTrasactions] =
    useState(listTransactions);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Form
            setIsLoggedIn={setIsLoggedIn}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            listFilterTransactions={listFilterTransactions}
            setListFilterTransactions={setListFilterTrasactions}
          />

          {listTransactions[0] === undefined ? (
            <>
              <h1 className="title-noTransactions">
                Você ainda não possuí nenhum lançamento
              </h1>
              <img
                src={NoTransactions}
                alt="noTransactions-img"
                className="noTransactions"
              />
            </>
          ) : (
            <List
              listTransactions={
                listFilterTransactions.length > 0
                  ? listFilterTransactions
                  : listTransactions
              }
            />
          )}
        </>
      ) : (
        <StartPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
