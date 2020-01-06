import React, { Component } from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Description from '../components/Description';
import NameForm from '../containers/NameForm';
import PrivacyContainer from '../containers/PrivacyContainer';

class NameBanner extends Component {
  continue = e => {
    e.preventDefault();
    const { nextStep, handleSubmit } = this.props;
    nextStep();
    handleSubmit();
  };

  render() {
    const { currentStep, values, handleChange, handleSubmit } = this.props;
    const props = { values, handleChange, handleSubmit };
    if (currentStep !== 3) {
      return null
    }

    return (
      <div className="banner">
        <Border />
        <Subtitle text="Last step" />
        <Title text="Almost done!" />
        <Description text="Please enter your first & last name" />
        <form
          onSubmit={this.continue}
        >
          <NameForm {...props} />
          <PrivacyContainer />
        </form>
      </div>
    );
  }
}

export default NameBanner;