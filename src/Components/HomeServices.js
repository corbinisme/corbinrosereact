
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default function HomeServices(){

    const services = [
        {
            title: "Web Design", 
            description: "Need a fresh look? <br />I've got you covered",
            icon: <FontAwesomeIcon icon={faGlobe} />,
        },
        {
            title: "Website Hosting", 
            description: "Need somewhere for your weary code to rest? <br />I 've got you covered",
            icon: <FontAwesomeIcon icon={faDownload} />,
        },
        {
            title: "Custom Development", 
            description: "Need something specific? <br />I got you covered",
            icon: <FontAwesomeIcon icon={faGears} />,
        },
        {
            title: "General Nerd", 
            description: "Need help with Windows? PowerPoint? Your toaster? <br />I've got you covered",
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        },
    ]
    return(<section className="section home-services">
        <div className="container">
            <div className="text-center">
                <h2>Services</h2>
                <p>What can I do for you?</p>
                
            </div>
            <div className="row mt-5 smaller-text">
                {services.map(service=>{
                    return(
                        <div className="col-lg-3 mb-5 col-md-6 text-center" key={service.title}> 
                            <span className="btn btn-lg mb-4 btn-outline-danger">
                                {service.icon}   
                            </span>
                            <h3>{service.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: service.description}}></p>
                        </div>
                    )
                }   
                )}
            </div>
        </div>

        
    </section>)
}