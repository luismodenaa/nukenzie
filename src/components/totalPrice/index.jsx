export const TotalPrice = ({ value }) => {
  const calcule = value.reduce((total, finance) => {
    if (finance.type === "Entrada") {
      return total + finance.value;
    } else {
      return total - finance.value;
    }
  }, 0);

  return (
    <div className="container-totalprice">
      <div className="head-totalprice">
        <h3>Valor total:</h3>
        <p>$ {calcule}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
