import "./index.css";
import { FinanceCard } from "../cards";

export const ListFinances = ({ list, remove, setFilter }) => {
  return (
    <div className="container-list">
      <div className="head-list">
        <p>Resumo financeiro</p>
        <div>
          <button
            onClick={() => {
              setFilter("");
            }}
            className="btn-list"
          >
            Todos
          </button>
          <button
            onClick={() => {
              setFilter("Entrada");
            }}
            className="btn-list"
          >
            Entradas
          </button>
          <button
            onClick={() => {
              setFilter("Saida");
            }}
            className="btn-list"
          >
            Despesas
          </button>
        </div>
      </div>

      <div className="div-listing-finances">
        {list.length ? (
          <ul className="ul-list">
            {list.map((finance, index) =>
              finance.type === "Entrada" ? (
                <FinanceCard
                  key={index}
                  finance={finance}
                  remove={remove}
                  classtype="cards-finances input-finance"
                />
              ) : (
                <FinanceCard
                  key={index}
                  finance={finance}
                  remove={remove}
                  classtype="cards-finances output-finance"
                />
              )
            )}
          </ul>
        ) : (
          <h3>Você ainda não possui nenhum lançamento</h3>
        )}
      </div>
    </div>
  );
};
