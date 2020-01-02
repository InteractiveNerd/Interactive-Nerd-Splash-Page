import React, { Component } from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import EmailForm from './EmailForm';
import Description from '../components/Description';

class EmailContainer extends Component {
  render() {
    const { nextStep, values, handleChange } = this.props;
    return (
      <div>
        <Border />
        <Subtitle text="Sign Up" />
        <Title text="Join our mailing list" />
        <Description />
        <EmailForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      </div>
    );
  }
}

export default EmailContainer;