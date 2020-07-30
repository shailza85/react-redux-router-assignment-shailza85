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
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/pastcalculations">
              Past Calculations
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;