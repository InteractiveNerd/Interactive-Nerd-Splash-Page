import React, { Component } from 'react';
import '../stylesheets/Counter.css';

class Counter extends Component {
  static defaultProps = {
    value: '00'
  }
  render() {
    const { value } = this.props;
    return (
      <div className="counter bolded--text">
        <p>{value}</p>
      </div>
    );
  }
}

export default Counter;