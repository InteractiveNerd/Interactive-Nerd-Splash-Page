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
        <form onClick={this.continue}>
          <IntroButton />
        </form>
      </div>
    );
  }
}

export default IntroBanner;