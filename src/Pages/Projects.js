import { useEffect, useState } from "react";
import Post from "../Components/Post";

function Projects(){

    const [data, setData] = useState([])

    useEffect(()=>{

        const url = "blog/wp-json/wp/v2/posts?categories=362";
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
  
                setData(data)
            }).catch(err=>{
                console.log(err)
            });
    },[])

    return (
        
           <div className="container">
            <h1>Projects</h1>
            <p>Blurb</p>
            {data&& data.map(item=>{

                return(
                    <Post key={item.id} item={item} type="projects" />
                )
            })}
        </div>
       
    )
}

export default Projects;