import React from "react";
import { Link } from "gatsby";

const NavLink = ({ children, ...props }) => {
  return (
    <Link className="kz-nav-link" activeClassName="active" {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
