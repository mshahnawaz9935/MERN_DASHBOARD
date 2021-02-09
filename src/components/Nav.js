import React from 'react';

function Nav() {

    return (
      <div className="nav">
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>

      <h3>Dropdown Menu inside a Navigation Bar</h3>
      <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
      </div>
    );
}

export default Nav;