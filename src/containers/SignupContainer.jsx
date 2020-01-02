import React, { Component } from 'react';
import IntroBanner from '../states/IntroBanner';
import EmailBanner from '../states/EmailBanner';
import NameBanner from '../states/NameBanner';
import CongratulationsBanner from '../states/CongratulationsBanner';

class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  nextStep = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1
    });
  };

  handleChange = input => {
    const { name, value } = input.target;
    this.setState({
      [ name ]: value
    })
  }

  handleSubmit = input => e => {
    e.preventDefault();
    // const { email, firstName, lastName } = this.state;
    console.log(this.state);
  }

  render() {
    const { currentStep, email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName };
    const nextStep = this.nextStep;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="container--spacing">
        <p>Step {currentStep}</p>
        <form
          onSubmit={handleSubmit}
        // action="/signup"
        // method="POST"
        >
          <IntroBanner
            currentStep={currentStep}
            nextStep={nextStep}
          />
          <EmailBanner
            nextStep={nextStep}
            currentStep={currentStep}
            handleChange={handleChange}
            values={values}
          />
          <NameBanner
            nextStep={nextStep}
            handleSubmit={handleSubmit}
            currentStep={currentStep}
            handleChange={handleChange}
            values={values}
          />
          <CongratulationsBanner
            currentStep={currentStep}
          />
        </form>
      </div>
    )
  }
}

export default SignUpContainer;