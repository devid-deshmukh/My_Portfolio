

import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
           {/*tells the browser to find an element with id home on the same page  */}
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


    </nav>
    /* ---------------------------------------------------------
  INDUSTRY STANDARD SNIPPET (For Teacher's Reference)
  ---------------------------------------------------------
  In a professional project, we avoid repeating <a> tags.
  We use an array and the .map() function like this:

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
  ---------------------------------------------------------
*/
  );
};

export default Navbar;