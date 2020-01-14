import React, { Component } from 'react';
import Counter from '../components/Counter';
import CounterSubtitle from '../components/CounterSubtitle';

class CounterContainer extends Component {
  render() {
    const { value, text } = this.props;

    return (
      <div className="flex--container counter--container">
        <Counter value={value} />
        <CounterSubtitle text={text} />
      </div>
    );
  }
}

export default CounterContainer;