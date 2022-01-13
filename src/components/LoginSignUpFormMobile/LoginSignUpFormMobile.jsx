import React from 'react';
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandLinkedin,
} from '@tabler/icons';
import './LoginSignUpFormMobile.css';

export default class LoginSignUpFormMobile extends React.Component {
  constructor() {
    super();
    this.container = React.createRef();
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    this.container.current.classList.add('right-panel-active');
  }

  onSignIn() {
    this.container.current.classList.remove('right-panel-active');
  }

  render() {
    return (
      <div className="container-mobile" ref={this.container}>
        <div className="form-container-mobile sign-up-container-mobile">
          <form action="#" className="">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <IconBrandFacebook stroke={2} />
              </a>
              <a href="#" className="social">
                <IconBrandGoogle stroke={2} />
              </a>
              <a href="#" className="social">
                <IconBrandLinkedin stroke={2} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={this.onSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container-mobile sign-in-container-mobile">
          <form action="#" className="">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <IconBrandFacebook stroke={2} />
              </a>
              <a href="#" className="social">
                <IconBrandGoogle stroke={2} />
              </a>
              <a href="#" className="social">
                <IconBrandLinkedin stroke={2} />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button onClick={this.onSignIn}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container-mobile">
          <div className="overlay-mobile">
            <div className="overlay-panel-mobile overlay-left-mobile">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={this.onSignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel-mobile overlay-right-mobile">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={this.onSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
