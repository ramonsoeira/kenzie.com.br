import React from "react";
import { Link } from "gatsby";
import "@styles/nav-link.scss";

const NavLink = ({ children, ...props }) => {
  return (
    <Link className="kz-nav-link" activeClassName="active" {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
