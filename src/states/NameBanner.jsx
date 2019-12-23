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
    const { nextStep } = this.props;
    nextStep();
  };

  render() {
    const { nextStep, values, handleChange } = this.props;
    const props = { nextStep, values, handleChange };

    return (
      <div className="banner">
        <Border />
        <Subtitle text="Last step" />
        <Title text="Almost done!" />
        <Description text="Please enter your first & last name" />
        <form onSubmit={this.continue}>
          <NameForm {...props} />
          <PrivacyContainer />
        </form>
      </div>
    );
  }
}

export default NameBanner;