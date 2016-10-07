import React, { PropTypes } from 'react';
import { Link } from 'react-router/es6';
// import styles from './App.css';

const App = ({ children }) => (
  <div >
    <header >
      <h1>Duff Boods</h1>
      <p>For to Better Track Doof Results</p>
    </header>
    <nav >
      <ul>
        <li><Link to="/home" activeClassName="active">Home</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
    </nav>
    <div >
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
