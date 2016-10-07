import React, { PropTypes } from 'react';
import { Link } from 'react-router/es6';
import styles from './App.css';

const App = ({ children }) => (
  <div className={styles.base}>
    <header className={styles.header}>
      <h1>Duff Boods</h1>
      <p>For to Better Track Doof Results</p>
    </header>
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/home" activeClassName="active">Home</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
    </nav>
    <div className={styles.example}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;