import React, { Component } from 'react';
import IntroButton from '../components/IntroButton';
import IntroContainer from '../containers/IntroContainer';

class IntroBanner extends Component {
  continue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  }

  render() {
    return (
      <div className="banner">
        <IntroContainer />
        <IntroButton
          onClick={this.continue}
        />
      </div>
    );
  }
}

export default IntroBanner;