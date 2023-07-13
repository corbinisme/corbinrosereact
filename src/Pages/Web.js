import { useEffect, useState } from "react";
import Post from "../Components/Post";

function Web(){

    const [data, setData] = useState([])

    useEffect(()=>{

        const url = "blog/wp-json/wp/v2/posts?categories=361";
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
            <h1>Website Work</h1>
            <p>Blurb</p>
            {data&& data.map(item=>{

                return(
                    <Post key={item.id} item={item} type="web" />
                )
            })}
        </div>
    )
}

export default Web;