import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link className = "link" to = "/">Home</Link>
        </div>
        <div>
          <Link className = "link" to = "/about">About</Link>
        </div>
        <div>
          <Link className = "link" to = "/contact" href="">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
