
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import BlogPost from "../Components/BlogPost";

export default function Blog(props){

    const [data, setData] = useState({})

    useEffect(()=>{
        // get all posts except the "non-blog" category
        const url = "https://corbinrose.com/blog/wp-json/wp/v2/posts?categories_exclude=365";
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data)
                setData(data)
            }).catch(err=>{
                console.log(err)
            }
        )
    },[])

    return(<div className="blogs">
        <div className="blog-list">
        {(data.length? data.map(item=>{

            return(
               
                <BlogPost key={item.id} item={item} />
                   
            )
        }):"Loading...")}

    </div>
    <div>
        <Link to="/blog" className="btn btn-primary btn-lg">
            See More Posts
        </Link>
    </div>
    <hr />
    </div>)
}