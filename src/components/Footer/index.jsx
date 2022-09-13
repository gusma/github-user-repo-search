import React from 'react';

import { FooterContainer, PushContainer } from './Footer.styled';

const Footer = () => {
  return (
    <PushContainer>
      <FooterContainer>
        <p>
          🚀 Created by{' '}
          <a href="https://www.gustavomalamud.com">Gustavo Malamud</a> in 2022
          with React.js.
        </p>
      </FooterContainer>
    </PushContainer>
  );
};

export default Footer;
