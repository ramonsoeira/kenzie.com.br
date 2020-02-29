import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import LeadFormButton from "@components/lead-form-button";
import NavLink from "@components/nav-link";
import Symbol from "@images/brand/symbol.svg";
import CloseIcon from "@icons/close";
import "@styles/header-mobile.scss";

const HeaderMobile = ({ onOpenLeadForm }) => {
  const [isOpen, setOpen] = useState(false);

  const navClass = classNames("kz-header-mobile-nav", {
    "is-open": isOpen
  });

  return (
    <div className="kz-header-mobile is-hidden-tablet">
      <div className="container">
        <div className="columns is-gapless is-vcentered is-mobile is-justified-between">
          <div className="column is-narrow">
            <Link className="kz-header-mobile-brand" to="/">
              <img src={Symbol} alt="Kenzie" />
            </Link>
          </div>

          <div className="column is-narrow">
            <LeadFormButton className="kz-button with-shadow">
              Quero participar
            </LeadFormButton>
          </div>

          <div className="column is-narrow">
            <button
              className="kz-header-mobile-toggle"
              onClick={() => setOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={navClass}>
              <li>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
