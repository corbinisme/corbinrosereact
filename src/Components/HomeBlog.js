import Blog from "./Blog"

export default function HomeBlog(){

    return(<section className="section home-blog">
        <div className="container">
            <div className="text-center mb-5">
            <h2>Latest Content</h2>
            <p>Blog posts in Travel, Life, Tech and more</p>
            </div>
            <div className="smaller-text">
            <Blog max={8} />
            </div>
        </div>
    </section>)
}