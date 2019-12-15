import React from "react";
import { Link } from "gatsby";
import "@styles/footer.scss";

import Logo from "@images/brand/logo-white.png";
import Facebook from "@images/social/facebook.png";
import Instagram from "@images/social/instagram.png";
import Linkedin from "@images/social/linkedin.png";

const Footer = ({ searchParams }) => {
  return (
    <div className="kz-footer">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <img width="147" height="149" src={Logo} alt="Kenzie" />
          </div>

          <div className="column">
            <ul className="kz-footer-menu">
              <h3 className="kz-footer-title">Kenzie Academy Brazil</h3>

              <li>
                <Link to={`/quem-somos` + searchParams}>Quem somos</Link>
              </li>

              <li>
                <Link to={`/curriculo` + searchParams}>Currículo</Link>
              </li>

              <li>
                <Link to={`/pagamento` + searchParams}>Pagamento</Link>
              </li>
            </ul>
          </div>

          <div className="column">
            <h3 className="kz-footer-title">#kenzienarede</h3>

            <ul className="kz-footer-social">
              <li>
                <a
                  href="https://www.linkedin.com/school/kenzie-academy-brasil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width="26" src={Linkedin} alt="Linkedin" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/kenzieacademybr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width="12" src={Facebook} alt="Facebook" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/kenzieacademybr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width="26" src={Instagram} alt="Instagram" />
                </a>
              </li>
            </ul>

            <address>
              R. General Mario Tourinho, 1733 - 706 - Seminário, Curitiba/PR
            </address>
            <p>Telefone: (41) 99232-9867</p>
            <p>contato@kenzie.com.br</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
