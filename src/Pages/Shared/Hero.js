import { useEffect, useState } from "react";

function Hero(props){
    const backgroundDefault = "https://corbinrose.com/blog/wp-content/uploads/2023/01/cropped-prof-1200x675-1.jpg";
    const page = props.page
    const [data, setData] = useState([])
    const [background, setBackround] = useState(backgroundDefault);

    useEffect(()=>{

        if(page=="/" || page=="/blog"){
            setBackround(backgroundDefault)
        } else {
            const url = `blog/wp-json/wp/v2/pages?slug=${props.page}&_embed`;
            fetch(url)
                .then(resp=>resp.json())
                .then(data=>{
                    console.log(data[0])
                    setData(data);

                    setBackround(data[0]._embedded["wp:featuredmedia"][0].source_url)
                }).catch(err=>{
                    console.log(err)
                });
            }
    },[props.page])

    return (
        <aside className="hero" style={{backgroundImage: `url(${background})`}}>

           
                <h1>{props.title}</h1>
                <div className="hero-backdrop"></div>
        </aside>
    )
}

export default Hero