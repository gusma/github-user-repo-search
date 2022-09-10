import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>
        <p>Logo</p>
      </h2>

      <ul>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/repositories">Repositories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
