import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row flex-nowrap justify-content-between align-self-centered align-items-center p-5 bg-secondary text-white">
      <h2>
        <p>Logo</p>
      </h2>

      <div className="d-flex justify-content-between flex-row">
        <div className="mr-5">
          <Link className="text-white" to="/">
            Users
          </Link>
        </div>
        <div>
          <Link className="text-white" to="/repositories">
            Repositories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
