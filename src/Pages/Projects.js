import { useEffect, useState } from "react";
import Post from "../Components/Post";
import { useLocation } from 'react-router-dom'

function Projects(){

    const [data, setData] = useState([])
    const [currentItem, setCurrentItem] = useState({})
    const location = useLocation();
    

    useEffect(()=>{
        console.log(location.pathname);
        const url = "/blog/wp-json/wp/v2/posts?categories=362";
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data)
                setData(data)
            }).catch(err=>{
                console.log(err)
            });
    },[location])

    return (
        
           <div className="container">
            <h1>Projects</h1>
    
            {(data.length? data.map(item=>{

                return(
                    <Post key={item.id} item={item} type="projects" />
                )
            }):"Loading...")}
        </div>
       
    )
}

export default Projects;