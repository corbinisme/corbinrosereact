import { useEffect, useState } from "react";
import Modal from "./Shared/Modal";

import VideoPlaylist from "../Components/VideoPlaylist";

function Video(){

    const [currentVid, setCurrentVid] = useState("")


    const handleVideoClick = (e) => {
 
        e.preventDefault();
        let anchor = e.target.closest("a");
        let ytLink = anchor.getAttribute("data-link")
        console.log(ytLink);
        setCurrentVid(ytLink)
    }
    return (
        <div className="container">
            <h1 className="entry-title">Video</h1>

            <Modal content={currentVid} />
            <hr />
            <VideoPlaylist handleVideoClick={handleVideoClick} playlistID="PLBbco3VjkpdNFUGAYr1HoowhQcLjmfnkb" />
            <hr />
            <VideoPlaylist handleVideoClick={handleVideoClick} playlistID="PLBCBEB0D1725E5105" />
            <hr />
            
            <VideoPlaylist handleVideoClick={handleVideoClick} playlistID="PLBbco3VjkpdNI8-G-DFoQ4VwXeltnNt2l" />
            <hr />

           
            

        </div>
    )
}

export default Video;