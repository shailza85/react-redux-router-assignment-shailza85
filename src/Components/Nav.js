import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component
{
  render ()
  {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home (To-Do App)
            </Link>
          </li>
          <li>
            <Link to="/about">
              About the App
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;