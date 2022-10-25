import { useState } from "react";
import { toast } from "react-toastify";
import "./index.css";

export const Form = ({ inputOutput, addFinance }) => {
  const [formData, setFormData] = useState({
    desc: "",
    value: 0,
    type: inputOutput[0],
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      formData.desc.length &&
      formData.value >= 1 &&
      (formData.type === "Saida" || formData.type === "Entrada")
    ) {
      addFinance(formData);
      setFormData({
        desc: "",
        value: 0,
        type: inputOutput[0],
      });
    } else {
      toast.warn("Preencha todos os campos", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="description">
        <p>Descrição</p>
        <input
          type="text"
          autoComplete="off"
          placeholder="Digite aqui a descrição"
          className="input"
          onChange={(event) =>
            setFormData({ ...formData, desc: event.target.value })
          }
          value={formData.desc}
        />
      </div>
      <div className="values">
        <div className="value">
          <p>Valor</p>
          <input
            type="number"
            placeholder="$500"
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.valueAsNumber })
            }
            value={formData.value}
          />
        </div>
        <div className="desc-value">
          <p>Tipo de valor</p>
          <select
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
            defaultValue={formData.type}
          >
            {inputOutput.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="btn-insert-value">
        Inserir valor
      </button>
    </form>
  );
};
