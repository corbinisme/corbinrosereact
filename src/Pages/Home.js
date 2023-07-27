import MapComponent from "../Components/MapComponent";
import HomeAbout from "../Components/HomeAbout";
import WordOfTheDay from "../Components/WordOfTheDay";
import HomeServices from "../Components/HomeServices";
import HomeBlog from "../Components/HomeBlog";
function Home(){

    return(
        <>
        <div className="container-full">
            
            
            <HomeAbout />
            
            <WordOfTheDay />
            
            <HomeServices />
            
            <section className="section map-section bg-light">
                <div className="container pt-5 pb-5 text-center">
                    <h2>Travel Adventures</h2>
                    <p></p>
                    <MapComponent />
                </div>
            </section>
            
            <HomeBlog />
        </div>
        </>
    )
}

export default Home;