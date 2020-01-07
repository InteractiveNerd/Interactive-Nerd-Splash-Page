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

  handleSubmit = e => {
    const { email, firstName, lastName } = this.state;
    const data = {
      user: [
        {
          email_address: email,
          status: 'Subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        }
      ]
    }

    const postData = JSON.stringify(data);

    fetch('/signup', {
      method: 'POST',
      body: postData,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.postData
    })
      .catch(error => console.log(error))
  }

  render() {
    const { currentStep, email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName };
    const nextStep = this.nextStep;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="container--spacing">
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
      </div>
    )
  }
}

export default SignUpContainer;