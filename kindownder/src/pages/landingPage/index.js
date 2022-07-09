import { Link } from "react-router-dom";
import Video from "../../components/video/homepage_video.mp4";
import Btn from "../../components/Button";
import "./landingPage.css";


export default function LandingPage() {
    return (
        <>
            {
                <div className="main-page">
                    <video className="video" autoPlay="autoplay" loop="loop" muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                    {/* <LottieAnimi /> */}
                    <div className="btns">
                        <Link to="/signup">
                            <Btn text='Sign Up' type="primary" />
                        </Link>
                        <Link to="/login">
                            <Btn text='Log In' type="secondary" />
                        </Link>
                    </div>
                </div >
            }
        </>
    );
}