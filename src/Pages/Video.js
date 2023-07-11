import { useEffect, useState } from "react";


function Video(){

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.youtube.com/feeds/videos.xml?playlist_id=PLBbco3VjkpdNFUGAYr1HoowhQcLjmfnkb`)
        .then(resp=>resp.json())
        .then(data =>{
            console.log("data", data)
        })
    }, []);

    return (
        <div className="container">
            Video

        </div>
    )
}

export default Video;