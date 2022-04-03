import "./styles.css";
import Card from "../Card";

function List({ listTransactions }) {
  return (
    <>
      {listTransactions.map((transaction, index) => {
        return <Card transaction={transaction} key={index} />;
      })}
    </>
  );
}

export default List;
