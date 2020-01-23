import React from "react";
import "@styles/top-bar.scss";

const Topbar = ({ onOpenLeadForm }) => {
  return (
    <div className="kz-top-bar">
      <p className="kz-top-bar-text">Próxima turma inicia em Abril!</p>

      <button data-ga="top-bar-cta-btn" className="kz-top-bar-alert" onClick={onOpenLeadForm}>
        Tenho interesse
      </button>
    </div>
  );
};

export default Topbar;
