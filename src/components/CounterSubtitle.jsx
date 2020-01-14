import React, { Component } from 'react';

class CounterSubtitle extends Component {
  static defaultProps = {
    text: 'Days'
  }
  render() {
    const { text } = this.props;
    return (
      <div className="counter--subtitle bolded--text">
        <p>{text}</p>
      </div>
    );
  }
}

export default CounterSubtitle;