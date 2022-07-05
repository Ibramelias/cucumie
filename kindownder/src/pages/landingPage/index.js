import { Link } from "react-router-dom";
import "./landingPage.css";
import LottieAnimi from "../../lotties/LottieAnimation";
import Btn from "../../components/Button";


export default function LandingPage() {

    return (
        <div className="main-page">
            <LottieAnimi />
            <div className="btns">
                <Link to="/signup">
                    <Btn text='Sign Up' type="primary" />
                </Link>
                <Link to="/login">
                    <Btn text='Log In' type="secondary" />
                </Link>
            </div>
        </div >
    );
}