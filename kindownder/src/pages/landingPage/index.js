import "./landingPage.css";
import LottieAnimi from "../../lotties/LottieAnimation";
import Btn from "../../components/Button";


export default function LandingPage() {

    return (
        <div className="main-page">
            <LottieAnimi />
            <div className="btns">
                <Btn text='Sign Up' type="primary" />
                <Btn text='Log In' type="secondary" />
            </div>
        </div >
    );
}