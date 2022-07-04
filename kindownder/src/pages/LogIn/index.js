import React from "react";
// import LottieAnimi from "../../lotties/LottieAnimation";
import logo from '../../assets/logo.png';
import { Container } from "react-bootstrap";
import "./logIn.css";

function LogIn() {
    return (
        <div className='logIn_page'>
            <div className="logIn_page-header">
                <img className='logIn_page-logo' src={logo} alt="logo"></img>
            </div>
            <Container>
                <div className="logIn_section">
                    <h1>To continue, log in</h1>
                    <div className="logIn_social-btns">
                        <p>sign up with facebook btn</p>
                        <p>sign up with google btn</p>
                    </div>
                    <div className="logIn_another-option_section">
                        <p className="logInPage-another-option">or</p>
                        <form className="logIn_form">
                            <label>Email address or username</label>
                            <input
                                required
                                type="email"
                                placeholder="Email address or username"
                            />
                            <label>Password</label>
                            <input
                                required
                                type="password"
                                placeholder="Password."
                            />
                            <div className="login_btn-section">
                                <a href="#">Froget your password ?</a>
                                <div className="logIn_page-btn">
                                    <button>LOG IN</button>
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
                            <button>Create a new account</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LogIn;