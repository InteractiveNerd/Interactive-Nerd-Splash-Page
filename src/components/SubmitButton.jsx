import React, { Component } from 'react';
import '../stylesheets/Submit.css';

class Submit extends Component {
  static defaultProps = {
    text: 'Next'
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <button className="button bolded--text">{text}</button>
      </div>
    );
  }
}

export default Submit;