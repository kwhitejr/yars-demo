import React, { Component } from 'react';
import { connect } from 'react-redux';

// import styles from './About.css';

class About extends Component {

  render() {
    return (
      <div>
        <h1>This is about.</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    about: state.about,
  };
}

export default connect(mapStateToProps)(About);
