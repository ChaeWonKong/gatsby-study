import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div>
    <header>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>LeonKong.com</h3>
      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <div style={{ margin: `0 auto`, maxWidth: 1000, padding: `0 1rem` }}>
      {children}
    </div>
  </div>
);
