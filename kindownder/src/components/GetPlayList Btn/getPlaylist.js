import axios from 'axios';
import { useEffect, useState } from "react";

const spotifyPlayList_ENDPOINT = "https://api.spotify.com/v1/me/playlists";


const GetUserPlayList = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({})

    useEffect(() => {
        if (localStorage.getItem("accesToke")) {
            setToken(localStorage.getItem("accessToken"))
        }
    }, [])

    const handeGetPlayList = () => {
        axios.get(spotifyPlayList_ENDPOINT, {
            header: {
                Authorization: "Bearer" + token,
            },
        }).then(res => {
            setData(res.data);
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <button onClick={handeGetPlayList}>Get your playlist</button>
        </>
    )
}

export default GetUserPlayList;