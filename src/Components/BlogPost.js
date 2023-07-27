

export default function BlogPost(props){

    
    const item = props.item;
    const image = (item.jetpack_featured_media_url? item.jetpack_featured_media_url: "https://corbinrose.com/blog/wp-content/uploads/2023/01/cropped-prof-1200x675-1.jpg")

    return(
        <div className="blog-entry mb-5" key={item.id}>
            <div className="row">
                <div className="col-lg-4">
                    <figure>
                        <img src={image} className="img-fluid" alt={item.title.rendered}/>
                    </figure>
                </div>
                <div className="col-lg-8">
                    <h3>{item.title.rendered}</h3>
                    <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></div>
                    <div className="read-more">
                        <a href={item.link}>Read More</a><br />
                        {item[`_links`].self[0].href}
                    </div>
                </div>
            </div>
        </div>
            
       
    )



}