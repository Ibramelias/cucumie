import { Link, useNavigate } from "react-router-dom"
import React, { useRef, useState } from "react";
import Btn from '../../components/Button'
import logo from '../../assets/logo.png';
import { Container, Alert } from "react-bootstrap";
import { useAuth } from "../../components/AuthContext/AuthContext";
import "./logIn.css";


function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/profile");
        } catch (err) {
            setError("Failed to Log In ")
            // window.location.reload();
            console.log(err)
        }
    }

    return (
        <div className='logIn_page'>
            <div className="logIn_page-header">
                <Link className="logo-link" to="/">
                    <img className='logIn_page-logo' src={logo} alt="logo"></img>
                </Link>
            </div>
            <Container>
                <div className="logIn_section">
                    <h1>To continue, log in</h1>
                    <div className="logIn_social-btns">
                        <Btn text='continue with facebook' type="social-media facebook" />
                        <Btn text='continue with google' type="social-media google" />
                    </div>
                    <div className="logIn_another-option_section">
                        <p className="logInPage-another-option">or</p>

                        <form onSubmit={handleSubmit} className="logIn_form">
                            {error && <Alert variant="danger">{error}</Alert>}
                            <label>Email address or username</label>
                            <input
                                required
                                ref={emailRef}
                                name="emial"
                                type="email"
                                placeholder="Email address or username"
                            />
                            <label>Password</label>
                            <input
                                required
                                ref={passwordRef}
                                name="password"
                                type="password"
                                placeholder="Password."
                            />
                            <div className="login_btn-section">
                                <Link to="/restpassword">
                                    <p>Forget your password ?</p>
                                </Link>
                                <div className="logIn_page-btn">
                                    <button className="btn btn--logIn" type='submit' disabled={loading}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="border"></div>
                    <div className="prompt-newAccount">
                        <p className="prompt-newAccount-title">
                            Don't have an acconut ?
                        </p>
                        <div className="newaccount_btn">
                            <Link to="/signup">
                                <Btn text='Easy! Sign up now' type="new_account-btn" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LogIn;