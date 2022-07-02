import "./landingPage.css";
import Lottie from 'react-lottie';
import animationData from '../../lotties/Cycle-animation.json';
import Btn from "../../components/Button";

export default function LandingPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    function redirectSingUp() {
        window.open("href=''")
    }

    return (
        <div className="main-page">
            <Lottie
                options={defaultOptions}
                height={350}
                width={350}
            />
            <div className="btns">
                <Btn text='Sign Up' type="primary" />
                <Btn text='Log In' type="secondary" />
            </div>

        </div>
    );
}