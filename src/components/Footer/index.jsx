import React from 'react';

import { FooterContainer } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        🚀 Created by{' '}
        <a href="https://www.gustavomalamud.com">Gustavo Malamud</a> in 2022
        with React.js.
      </p>
    </FooterContainer>
  );
};

export default Footer;
