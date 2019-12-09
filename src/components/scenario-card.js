import React from "react";

import "@styles/scenario-card.scss";

const ScenarioCard = ({
  title,
  salary,
  paymentAmount,
  paymentTerms,
  total
}) => {
  const hasPayment = !!paymentAmount && !!paymentTerms;

  return (
    <div className="kz-scenario-card">
      <h3 className="kz-scenario-card-title">{title}</h3>

      <p className="kz-scenario-card-main">
        Você conseguiu um trabalho com remuneração de
        <span className="salary">{salary}</span>
      </p>

      {hasPayment ? (
        <div>
          <p className="kz-scenario-card-payment">
            <p>
              Você pagará: <br />
              <span className="is-bold">
                {paymentAmount} por {paymentTerms}
              </span>
            </p>
          </p>
          <span className="is-bold">Total de {total}</span>
        </div>
      ) : (
        <p className="no-payment is-bold">Você não precisa pagar nada.</p>
      )}
    </div>
  );
};

export default ScenarioCard;
