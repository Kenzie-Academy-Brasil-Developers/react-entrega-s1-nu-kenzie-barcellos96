import "./styles.css";
function ButtonsFilter({ withdraw, deposit, all }) {
  return (
    <>
      <h2 className="title">Resumo financeiro:</h2>
      <section className="section-buttons">
        <button className="buttons" onClick={all}>
          Todos
        </button>
        <button className="buttons" onClick={withdraw}>
          Entradas
        </button>
        <button className="buttons" onClick={deposit}>
          Saidas
        </button>
      </section>
    </>
  );
}

export default ButtonsFilter;
