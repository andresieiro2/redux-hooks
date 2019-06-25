import React from 'react';

import HeaderStyle from './style';

import logo from './img/logo.png';

const Header = props => {
  return (
    <HeaderStyle>
      <img src={logo} alt="React" className="logo" />
    </HeaderStyle>
  );
};

export default Header;
