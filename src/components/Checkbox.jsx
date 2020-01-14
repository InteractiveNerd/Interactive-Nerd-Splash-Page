import React, { Component } from 'react';

class Checkbox extends Component {
  state = {}
  render() {
    return (
      <div>
        <input
          type="checkbox"
          required={true}
        />
      </div>
    );
  }
}

export default Checkbox;