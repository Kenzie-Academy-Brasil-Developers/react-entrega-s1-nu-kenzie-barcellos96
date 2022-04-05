import "./styles.css";
import imgTrash from "../../assets/ButtonTrash.png";

function Card({ transaction, remove }) {
  return (
    <section
      className={
        transaction.type === "Entrada"
          ? "container-card"
          : "container-card-withdraw"
      }
    >
      <div className="type-description">
        <h3 className="description-card">{transaction.description}</h3>
        <p className="type-card"> {transaction.type}</p>
      </div>
      <div className="value-img">
        <span className="value-card"> R${transaction.value}</span>

        <img src={imgTrash} alt="trash" className="img-trash" />
      </div>
    </section>
  );
}

export default Card;
