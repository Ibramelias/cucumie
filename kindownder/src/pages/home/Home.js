import { Link } from "react-router-dom"
import TopBar from '../../components/tobBar/tobBar';
import Nav from '../../components/nav/nav';
import './home.css';

export default function Home() {
    return (
        <div className='homePage'>
            <TopBar />
            <Nav />
            {/* <button onClick={handelLogIN}>Login to  sporifty</button>
                <GetUserPlayList /> */}
        </div >
    )
}