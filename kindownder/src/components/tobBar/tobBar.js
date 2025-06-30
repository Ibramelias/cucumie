import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useEffect } from "react";
import './tobBar.css'
// import GetUserPlayList from '../../components/GetPlayList Btn/getPlaylist';


const CLIENT_ID = "a0bad5639a9f4d1ba5763a93a6fed664"
const SPOTIFY_AUTHORIZATION_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/profile"
const SPACE_DELIMITER = "%20";
const SCOPE = [
    "playlist-read-private",
    "playlist-read-collaborative"
];
const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER);

// http://localhost:3000/#access_token=BQCp5_N6ivfFJU0nJ3sCzFG0xM7EFf4sAULkC249lwCNDjs-4XOnlnZWGHSpCrq3kmqsfcghZfoggSck-0VKy-vAdd1dqVJ-Hf3J7WeLB2KSxTFTWTBt_NPR4K6lXfLFnGmmNo2x8Wp6Anra3gE_iBHGwmpH98mAqs3Bo48K1zSYlCoJdJB_1VfIaswkMibIchOBVp5mOU03mbU&token_type=Bearer&expires_in=3600

const getReturnedPramsFromSpotifyAuth = (hash) => {
    const stringAfterHashtahg = hash.substring(1);
    const paramInUrl = stringAfterHashtahg.split("&");
    const paramSplitUp = paramInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater
    }, {});
    return paramSplitUp
}

export default function TopBar() {
    const [error, setError] = useState();
    const { currentUser, logout } = useAuth();
    let navigate = useNavigate();



    async function handleLogout() {
        setError('')

        try {
            await logout();
            navigate('/')
        } catch (err) {
            setError("Faild to log out")
            console.log(err)
        }
    }

    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getReturnedPramsFromSpotifyAuth(window.location.hash)
            console.log({ access_token })

            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("expiresIN", expires_in);
            localStorage.setItem("tokenType", token_type);
        }
    })

    const handelLogIN = (e) => {
        e.preventDefault()
        window.location = `${SPOTIFY_AUTHORIZATION_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE_URL_PARAM}&response_type=token&show_dialog=true`

    }
    return (
        <div className='top__bar'>
            <div className='top__bar-links'>
                <ul className='top__bar-ul'>
                    <li className='top__bar-li-userName'><strong>Hello {currentUser.email}</strong></li>
                    <li className='top__bar-li'><a href='#'>Premium</a></li>
                    <li className='top__bar-li'><a href='#'>Download</a></li>
                    <li className='top__bar-li'><button onClick={handleLogout} className='logout'>Log out</button></li>
                    <li className='top__bar-li' onClick={handelLogIN}><button className='logIn'>Log In spotify</button></li>
                    {/* <GetUserPlayList /> */}
                </ul>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <p>Hello </p>{currentUser.email} */}
        </div>
    )
}