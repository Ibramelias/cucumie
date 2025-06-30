import React, { useState, useRef } from 'react';
import { useAuth } from "../../components/AuthContext/AuthContext";
import { Alert, Container } from 'react-bootstrap';
import logo from '../../assets/black_logo.png';
// import Btn from "../../components/Button/index"
import "./rest.css"

export default function RestPassword() {
    const emailRef = useRef();
    const { restPassword } = useAuth();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [Message, setMessage] = useState()
    // let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await restPassword(emailRef.current.value);
            setMessage("Check your inbox for fruther instructions")
            // navigate("/login");
        } catch (err) {
            setError("Failed to rest your password")
            console.log(err)
        }
    }

    return (
        <div className='rest_password-page'>
            <div className='rest_password-header'>
                <Container>
                    <img className='rest_password-logo' src={logo} alt="logo" />
                    <div className='rest_password-section'>
                        <h1 className='rest_password-page-title'>Rest password</h1>
                        <p className='rest_password-page-p'>Enter your email address that you used to register. We'll send you an email <br />with your username and link to rest your password</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {Message && <Alert>{Message}</Alert>}
                        <form onSubmit={handleSubmit} className='rest_password-input'>
                            <label>Email address</label>
                            <input
                                required
                                ref={emailRef}
                                type="email"
                                autoComplete="on"
                            />
                            <button className="btn btn--rest-btn" disabled={loading}>Send</button>
                            {/* <Btn text='Submit' type="rest-btn" /> */}
                        </form>
                        {/* <button >Send</button> */}
                        <p className='rest-other-option' >If you still need help, <em>Contact us</em></p>
                    </div>
                </Container>
            </div>
        </div>
    )
}