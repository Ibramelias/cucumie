import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/black_logo.png';
import Btn from "../../components/Button/index"
import "./rest.css"

export default function RestPassword() {
    return (
        <div className='rest_password-page'>
            <div className='rest_password-header'>
                <Container>
                    <img className='rest_password-logo' src={logo} alt="logo" />
                    <div className='rest_password-section'>
                        <h1 className='rest_password-page-title'>Rest password</h1>
                        <p className='rest_password-page-p'>Enter your email address that you used to register. We'll send you an email <br />with your username and link to rest your password</p>
                        <div className='rest_password-input'>
                            <label>Email address</label>
                            <input
                                required
                                type="email"
                                autoComplete="on"
                            />
                        </div>
                        <Btn text='Submit' type="rest-btn" />
                        {/* <button >Send</button> */}
                        <p className='rest-other-option'>If you still need help, contact us</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

