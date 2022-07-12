import animationData from '../lotties/Cycle-animation.json';
import Lottie from 'react-lottie';
import "./lottie.css"

function LottieAnimi() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="logingPage">
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    )
}

export default LottieAnimi;