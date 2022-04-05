import "./styles.css";
import nuImgForm from "../../assets/NuKenzieForm.png";
import { useState } from "react";
import TotalMoney from "../TotalMoney";
import ButtonsFilter from "../ButtonsFilter";

function Form({
  setIsLoggedIn,
  listTransactions,
  setListTransactions,
  listFilterTransactions,
  setListFilterTransactions,
}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleNewTransaction(event) {
    event.preventDefault();
    const transaction = {
      description,
      value,
      type,
    };
    setListTransactions([...listTransactions, transaction]);
  }

  function handleDeposit() {
    const depositTransactions = listTransactions.filter((transactions) => {
      return transactions.type === "Saida";
    });

    return setListFilterTransactions(depositTransactions);
  }

  function handleWithdraw() {
    const withdrawTransactions = listTransactions.filter((transactions) => {
      return transactions.type === "Entrada";
    });

    return setListFilterTransactions(withdrawTransactions);
  }

  function handleAll() {
    const allTransactions = listTransactions.filter((transactions) => {
      return transactions.type === "Saida" || transactions.type === "Entrada";
    });

    setListFilterTransactions([]);
    return setListTransactions(allTransactions);
  }

  return (
    <div>
      <header className="navbar-form">
        <img src={nuImgForm} alt="logo-nu-kenzie" />
        <button className="button-navbar-form" onClick={handleLogout}>
          Inicio
        </button>
      </header>

      <ButtonsFilter
        deposit={handleDeposit}
        withdraw={handleWithdraw}
        all={handleAll}
      />

      <form className="form" onSubmit={handleNewTransaction}>
        <section className="section-description">
          <label className="label-description">Descrição</label>
          <input
            className="input-description"
            placeholder="Digite aqui sua descrção"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <p className="exemple">Ex: Compra de roupas</p>
        </section>

        <section className="section-value-type">
          <section className="section-value">
            <label>Valor</label>
            <input
              className="input-value"
              placeholder="1                R$"
              type="String"
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
            />
          </section>

          <section className="section-type">
            <label>Tipo de valor</label>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="select"
            >
              <option>Entrada</option>
              <option>Saida</option>
            </select>
          </section>
        </section>

        <button type="submit" className="insert-value-form">
          Inserir valor
        </button>
      </form>

      <TotalMoney listTransactions={listTransactions} />
    </div>
  );
}

export default Form;
