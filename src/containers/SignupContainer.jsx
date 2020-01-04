import React, { Component } from 'react';
import IntroBanner from '../states/IntroBanner';
import EmailBanner from '../states/EmailBanner';
import NameBanner from '../states/NameBanner';
import CongratulationsBanner from '../states/CongratulationsBanner';
import { request } from 'express';

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
    const options = {
      url: 'https://us4.api.mailchimp.com/3.0/lists/89060c2d3e',
      method: 'POST',
      headers: {
        Authorization: 'auth d8350b6f303386ee01f6240b0e9439bd-us4'
      },
      body: postData
    };

    request(options, (err, response, body) => {
      if (err) {
        response.redirect('fatal: Please try again');
      } else {
        if (response.statusCode === 200) {
          response.redirect('/success');
        } else {
          response.redirect('fatal: Please try again')
        }
      }
    })
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