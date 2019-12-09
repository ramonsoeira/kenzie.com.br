import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import Logo from "@images/brand/logo.png";
import CloseIcon from "@icons/close";
import "@styles/header.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navClass = classNames("kz-header-nav", {
    "is-open": isOpen
  });

  return (
    <div className="kz-header">
      <Link className="kz-header-brand" to="/">
        <img width="53" height="53" src={Logo} alt="Kenzie" />
      </Link>

      <div
        className="kz-header-toggle is-hidden-tablet"
        onClick={() => setOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={navClass}>
        <li className="is-hidden-desktop">
          <CloseIcon
            width="20px"
            height="20px"
            fill="white"
            onClick={() => setOpen(false)}
          />
        </li>

        <li>
          <Link to="/quem-somos" title="Quem somos">
            Quem somos
          </Link>
        </li>

        <li>
          <Link to="/curriculo" title="Currículo">
            Currículo
          </Link>
        </li>

        <li>
          <Link to="/pagamento" title="Pagamento">
            Pagamento
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
