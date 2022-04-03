import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="container-total">
      <p className="title-money">Valor total:</p>

      <p className="description-money">O valor se refere ao saldo</p>
      <div className="total-money">
        {listTransactions.reduce((acc, transaction) => {
          if (transaction.type === "Entrada") {
            acc += transaction.value;
          } else {
            acc -= transaction.value;
          }

          return acc;
        }, 0)}
      </div>
    </div>
  );
}

export default TotalMoney;
