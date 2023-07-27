import { Link } from 'react-router-dom';
export default function HomeAbout(){

    return (<section className="section home-about">
        <div className="container text-center">
        <h2>About Corbin</h2>
        <p>Web developer, designer, musician, photographer, superhero, and pun-maker</p>
        <p>
            <Link to="/about" className="btn btn-outline-secondary">
                Read More
            </Link>
        </p>
    </div>
    </section>)
}