import React from 'react';
import { Link } from 'react-router-dom';

//Nav displays the menu links on the page: Calculator and Past Calculations
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