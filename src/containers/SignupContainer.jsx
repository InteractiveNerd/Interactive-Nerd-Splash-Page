import React, { Component } from 'react';
import IntroBanner from '../states/IntroBanner';
import EmailBanner from '../states/EmailBanner';
import NameBanner from '../states/NameBanner';
import CongratulationsBanner from '../states/CongratulationsBanner';

class SignUpContainer extends Component {
  state = {
    step: 1,
    email: '',
    firstName: '',
    lastName: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  handleChange = input => e => {
    this.setState({ [ input ]: e.target.value });
  };

  render() {
    const { step, email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName };
    const nextStep = this.nextStep;
    const handleChange = this.handleChange;
    const props = { nextStep, handleChange, values };

    switch (step) {
      case 1:
        return (
          <div>
            <IntroBanner nextStep={nextStep} />
          </div>
        )
      case 2:
        return (
          <div>
            <EmailBanner {...props} />
          </div>
        )
      case 3:
        return (
          <div>
            <NameBanner {...props} />
          </div>
        )
      case 4:
        return (
          <div>
            <CongratulationsBanner />
            {console.log(values)}
          </div>
        )
      default:
    }
  }
}

export default SignUpContainer;