import React from 'react';
import { Link } from 'react-router/es6';

// import styles from './NotFound.css';

const NotFound = () => (
  <div>
    <h2>Page Not Found!</h2>
    <Link to="/home">Go home now</Link>
  </div>
);

export default NotFound;
