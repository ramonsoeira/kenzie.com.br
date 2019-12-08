import React from "react";
import Logo from "@images/brand/logo.png";
import "@styles/header.scss";

import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="kz-header">
      <Link to="/">
        <img width="53" height="53" src={Logo} alt="Kenzie" />
      </Link>

      <ul className="kz-header-nav">
        <li>
          <Link to="/quem-somos" title="Quem somos">
            Quem somos
          </Link>
        </li>

        <li>
          <Link to="/" title="Currículo">
            Currículo
          </Link>
        </li>

        <li>
          <Link to="/pagamento" title="Pagamento">
            Pagamento
          </Link>
        </li>

        <li>
          <Link to="/" title="FAQ">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
