import React, { Component } from 'react';

class TimerSubtitle extends Component {
  static defaultProps = {
    text: 'Days'
  }
  render() {
    const { text } = this.props;
    return (
      <div className="timer--subtitle bolded--text">
        <p>{text}</p>
      </div>
    );
  }
}

export default TimerSubtitle;