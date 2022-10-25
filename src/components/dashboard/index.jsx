import { useState } from "react";
import { toast } from "react-toastify";
import { Form } from "../form";
import { Logo } from "../homepageLogo";
import { ListFinances } from "../list";
import { TotalPrice } from "../totalPrice";
import "./index.css";

export const Dashboard = ({ setIsLogged }) => {
  const [listFinance, setListFinance] = useState([]);

  const inputOutput = ["Entrada", "Saida"];

  const [filter, setFilter] = useState("");

  const newFinanceList = listFinance.filter((finance) =>
    filter === "" ? true : finance.type === filter
  );

  const addFinance = (formData) => {
    if (
      !listFinance.find(
        (finance) => finance.desc.toLowerCase() === formData.desc.toLowerCase()
      )
    ) {
      toast.success("Item adicionado com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
      setListFinance([...listFinance, formData]);
    } else {
      toast.error("Já existe este item", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const removeFinance = (selectedFinance) => {
    const newFinanceList = listFinance.filter(
      (finance) => finance !== selectedFinance
    );
    setListFinance(newFinanceList);
    toast.success("Item removido com sucesso", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="main-background">
      <header>
        <div className="header-div">
          <Logo />
          <button onClick={() => setIsLogged(false)}>Sair</button>
        </div>
      </header>
      <div className="container">
        <section className="create-finance">
          <Form inputOutput={inputOutput} addFinance={addFinance} />
          <section className="section-totalprice">
            <TotalPrice value={newFinanceList} />
          </section>
        </section>
        <section className="all-finances">
          <ListFinances
            list={newFinanceList}
            remove={removeFinance}
            setFilter={setFilter}
          />
        </section>
      </div>
    </div>
  );
};
