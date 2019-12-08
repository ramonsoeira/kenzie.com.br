import React from "react";
import { Link } from "gatsby";
import "@styles/top-bar.scss";

const Topbar = () => {
  return (
    <div className="kz-top-bar is-hidden-mobile">
      <p className="kz-top-bar-text">Próxima turma inicia 28 de Janeiro!</p>

      <Link className="kz-top-bar-alert" to="/">
        Saiba mais
      </Link>
    </div>
  );
};

export default Topbar;
