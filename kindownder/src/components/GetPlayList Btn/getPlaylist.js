import { useEffect, useState } from "react";
import axios from 'axios';

const spotifyPlayList_ENDPOINT = "https://api.spotify.com/v1/me/playlists";


const GetUserPlayList = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"))
        }
    }, [])

    const handeGetPlayList = () => {
        axios.get(spotifyPlayList_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then((res) => {
            setData(res.data);
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <button onClick={handeGetPlayList}>Get your playlist</button>
            {/* {data.items ? data.items.map((item) => <p>(item.names)</p>) : null} */}
        </>
    )
}

export default GetUserPlayList;