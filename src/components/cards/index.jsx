import { FaTrash } from "react-icons/fa";

export const FinanceCard = ({ finance, classtype, remove }) => {
  return (
    <li className={classtype}>
      <div>
        <h3>{finance.desc}</h3>
        <div>
          <p>R$ {finance.value}</p>
          <FaTrash onClick={() => remove(finance)} className="del-finance" />
        </div>
      </div>
      <p>{finance.type}</p>
    </li>
  );
};
