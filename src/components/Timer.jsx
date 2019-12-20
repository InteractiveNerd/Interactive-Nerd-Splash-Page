import React, { Component } from 'react';
import '../stylesheets/Timer.css';

class Timer extends Component {
  static defaultProps = {
    value: '--'
  }
  render() {
    const { value } = this.props;
    return (
      <div className="timer bolded--text">
        <p>{value}</p>
      </div>
    );
  }
}

export default Timer;