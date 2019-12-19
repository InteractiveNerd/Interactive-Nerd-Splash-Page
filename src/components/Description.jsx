import React, { Component } from 'react';
import '../stylesheets/Description.css';

class Description extends Component {
  static defaultProps = {
    text: 'We promise to never spam you*'
  }
  render() {
    const { text } = this.props;

    return (
      <div className="description regular--text">{text}</div>
    );
  }
}

export default Description;