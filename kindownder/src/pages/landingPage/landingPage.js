import "./landingPage.css";
import Lottie from 'react-lottie';
import animationData from '../../lotties/Cycle-Animation.json';

export default function LandingPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="main-page">
            <Lottie
                options={defaultOptions}
                height={350}
                width={350}
            />
        </div>
    );
}