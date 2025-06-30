import TopBar from '../../components/tobBar/tobBar';
import Nav from '../../components/nav/nav';
import GetUserPlayList from "../../components/GetPlayList Btn/getPlaylist"
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import './home.css';

// const spotifyPlayList_ENDPOINT = "https://api.spotify.com/v1/browse/categories?country=US&locale=sv_SE&limit=10&offset=5";

export default function Home() {
    // const [token, setToken] = useState("");
    // const [data, setData] = useState({});



    // useEffect(() => {
    //     if (localStorage.getItem("accessToken")) {
    //         setToken(localStorage.getItem("accessToken"))
    //     }
    //     axios.get(spotifyPlayList_ENDPOINT, {
    //         headers: {
    //             Authorization: "Bearer " + token,
    //         }
    //     }).then((res) => {
    //         // setData(res.data);
    //         console.log(res)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    return (
        <div className='homePage'>
            <TopBar />
            <Nav />
            {/* <button onClick={handelLogIN}>Login to  sporifty</button> */}
            <GetUserPlayList />
        </div >
    )
}