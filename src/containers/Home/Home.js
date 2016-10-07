import React, { Component } from 'react';
import { connect } from 'react-redux';

// import styles from './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>This is home.</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

export default connect(mapStateToProps)(Home);
