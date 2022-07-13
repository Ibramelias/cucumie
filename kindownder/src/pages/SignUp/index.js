import { Link, useNavigate } from "react-router-dom"
import React, { useRef, useState } from "react";
import Btn from '../../components/Button'
import logo from '../../assets/logo.png';
import { Container, Alert } from "react-bootstrap";
import { useAuth } from "../../components/AuthContext/AuthContext";
import "./signUp.css";

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfimRef = useRef();
    const userNameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfimRef.current.value) {
            return setError("Your password does not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value);
            navigate("/profile")
        } catch (err) {
            setError("Failed to create an account")
            // window.location.reload();
            console.log(err)
        }
    }



    return (
        <div className='signup_page'>
            <div className="signup_page-header">
                <Link className="logo-link" to="/">
                    <img className='signup_page-logo' src={logo} alt="logo"></img>
                </Link>
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
                        <form onSubmit={handleSubmit} className="signup_form">
                            {error && <Alert variant="danger">{error}</Alert>}
                            <label>What's your email?</label>
                            <input
                                required
                                ref={emailRef}
                                type="email"
                                autoComplete="on"
                                placeholder="Enter your email."
                            />
                            <label>Create a password</label>
                            <input
                                required
                                ref={passwordRef}
                                type="password"
                                autoComplete="on"
                                placeholder="Create a password."
                            />
                            <label>Confirm your Password?</label>
                            <input
                                required
                                ref={passwordConfimRef}
                                type="password"
                                autoComplete="on"
                                placeholder="Confirm Password."
                            />
                            <label>What should we call you?</label>
                            <input
                                ref={userNameRef}
                                type="username"
                                autoComplete="on"
                                placeholder="Enter a profile name."
                            />
                            <div className="signup_page-btn">
                                <button className="btn btn--signup-btn" type='submit' disabled={loading}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;