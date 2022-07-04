import Lottie from 'react-lottie';
import animationData from '../lotties/Cycle-animation.json';

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
        <Lottie
            options={defaultOptions}
            height={350}
            width={350}
        />
    )
}

export default LottieAnimi;