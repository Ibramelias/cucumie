import React from "react";
import Btn from '../../components/Button'
// import LottieAnimi from "../../lotties/LottieAnimation";
import logo from '../../assets/logo.png';
import { Container } from "react-bootstrap";
import "./signUp.css";

function SignUp() {
    return (
        <div className='signup_page'>
            <div className="signup_page-header">
                <img className='signup_page-logo' src={logo} alt="logo"></img>
            </div>
            <Container>
                <div className="signup_section">
                    <h1>Sign Up for free to start listening</h1>
                    <div className="signup_social-btns">
                        <Btn text='Sign up with facebook' type="social-media facebook" />
                        <Btn text='sign up with google' type="social-media google" />
                    </div>
                    <div className="signUp_another-option-section">
                        <p className="signupPage-another-option">or</p>
                        <h2>Sign up with your email address</h2>
                        <form className="signup_form">
                            <label>What's your email?</label>
                            <input
                                required
                                type="email"
                                placeholder="Enter your email."
                            />
                            <label>Confirm your email?</label>
                            <input
                                required
                                type="email"
                                placeholder="Enter your email again."
                            />
                            <label>Create a password</label>
                            <input
                                required
                                type="password"
                                placeholder="Create a password."
                            />
                            <label>What should we call you?</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter a profile name."
                            />
                            <div className="signup_page-btn">
                                <Btn text='sign up' type="signup-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;