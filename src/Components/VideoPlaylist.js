import { useEffect, useState } from "react";
import styles from "./VideoPlaylist.module.css";


function VideoPlaylist(props){

    const [data, setData] = useState([])
    const playlist_id = props.playlistID;
    const handleVideoClick = props.handleVideoClick

    
    useEffect(()=>{
        fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.youtube.com/feeds/videos.xml?playlist_id=${playlist_id}`)
        .then(resp=>resp.json())
        .then(dat =>{
            console.log("data", dat)
            setData(dat)
        })
    }, []);

    return (
        <div className={styles.itemContainer}>
            <h2>{data && data.title} Playlist</h2>
            <div className="row">

            {data.items && data.items.map(item=>{

                return(
                    <div className={`col-md-4  ${styles.col}`} key={item.id}>
                        <a href="#" onClick={handleVideoClick} 
                        data-link={item.link} target="_blank">
                            <figure>
                                <img src={item.enclosures[0]} alt={item.title} />
                            </figure>
                            <span>{item.title}</span>
                        </a>

                    </div>
                )
            })}
            </div>

        </div>
    )
}

export default VideoPlaylist;