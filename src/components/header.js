import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import NavLink from "@components/nav-link";
import Symbol from "@images/brand/symbol.svg";
import CloseIcon from "@icons/close";
import "@styles/header.scss";

const Header = ({ onOpenLeadForm }) => {
  const [isOpen, setOpen] = useState(false);

  const navClass = classNames("kz-header-nav", {
    "is-open": isOpen
  });

  return (
    <div className="kz-header">
      <div className="container">
        <div className="columns is-mobile is-vcentered is-justified-between">
          <div className="column is-narrow">
            <Link className="kz-header-brand" to="/">
              <img src={Symbol} alt="Kenzie" />
            </Link>
          </div>

          <div className="column is-narrow">
            <div className="columns is-mobile is-vcentered reverse-columns-desktop">
              <div className="column is-narrow is-hidden-desktop">
                <button
                  className="kz-header-toggle"
                  onClick={() => setOpen(!isOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <div className="column is-narrow">
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
                    <NavLink to={`/quem-somos/`} title="Quem somos">
                      Quem somos
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={`/curriculo/`} title="Currículo">
                      Currículo
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={`/pagamento/`} title="Pagamento">
                      Pagamento
                    </NavLink>
                  </li>
                </ul>

                <button onClick={onOpenLeadForm} className="kz-button with-shadow">
                  Quero participar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
