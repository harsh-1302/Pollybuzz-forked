import React from 'react';
import MediaQuery from 'react-responsive';
import LoginSignUpFormDesktop from '../../components/LoginSignUpFormDesktop/LoginSignUpFormDesktop';
import LoginSignUpFormMobile from '../../components/LoginSignUpFormMobile/LoginSignUpFormMobile';

function LoginSignUpForm() {
  return (
    <div>
      <MediaQuery minWidth={751}>
        <LoginSignUpFormDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={750}>
        <LoginSignUpFormMobile />
      </MediaQuery>
    </div>
  );
}

export default LoginSignUpForm;
