import React from "react";
import "@styles/footer.scss";

import Logo from "@images/brand/logo-white.png";
import Facebook from "@images/social/facebook.png";
import Instagram from "@images/social/instagram.png";
import Linkedin from "@images/social/linkedin.png";

const Footer = () => {
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
                <a>Quem somos</a>
              </li>

              <li>
                <a>Currículo</a>
              </li>

              <li>
                <a>Pagamento</a>
              </li>

              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h3 className="kz-footer-title">#kenzienarede</h3>

            <ul className="kz-footer-social">
              <li>
                <a href="/">
                  <img width="26" src={Linkedin} alt="Linkedin" />
                </a>
              </li>

              <li>
                <a href="">
                  <img width="12" src={Facebook} alt="Facebook" />
                </a>
              </li>

              <li>
                <a href="">
                  <img width="26" src={Instagram} alt="Instagram" />
                </a>
              </li>
            </ul>

            <address>Av. do Batel, 1705 - 101 - Batel, Curitiba/PR</address>
            <p>Fone: 41 9905-1517</p>
            <p>contato@kenzie.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
