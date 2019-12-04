import React from "react";
import Logo from "@images/brand/logo.png";
import "@styles/header.scss";

const Header = () => {
  return (
    <div class="kz-header">
      <img width="53" height="53" src={Logo} alt="Kenzie" />

      <ul class="kz-header-nav">
        <li>
          <a href="/" title="Quem somos">
            Quem somos
          </a>
        </li>

        <li>
          <a href="/" title="Currículo">
            Currículo
          </a>
        </li>

        <li>
          <a href="/" title="Pagamento">
            Pagamento
          </a>
        </li>

        <li>
          <a href="/" title="FAQ">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
