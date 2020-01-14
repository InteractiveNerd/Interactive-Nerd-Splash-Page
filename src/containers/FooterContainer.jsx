import React from 'react';
import Divider from '../components/Divider';
import FooterTitle from '../components/FooterTitle';
import FooterSubtitle from '../components/FooterSubtitle';

const Footer = () => {
  return (
    <div className="footer flex--container">
      <Divider />
      <FooterTitle />
      <FooterSubtitle />
    </div>
  );
}

export default Footer;