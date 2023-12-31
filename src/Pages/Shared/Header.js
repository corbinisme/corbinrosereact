import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Header (props){


    const menuOpen = (props.menuopen? "show": "");
   
    return (
        <header className="fixed-top main-header">
           
           <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
            
                <div className="container row mx-auto">

                    <div className="col-auto p-0">
                        <div className="navbar-brand d-flex align-items-center">
                            <Link to="/" onClick={()=>{props.changePage("/")}}>
                                <img src="/img/logo.svg" height="60" />
                                corbin<span>rose</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3 col-md-auto p-0 text-right">
                        
                    <button onClick={props.menuclick}
                            className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className={`collapse navbar-collapse col-12 col-md-auto p-0 ${menuOpen}`}>
                        <Navigation type="full" navclass="navbar-nav" menu={props.menu} page={props.page} changePage={props.changePage} />
                        <div className="subMenu">

                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary"><FontAwesomeIcon icon={faSearch} /></button>
                                </li>
                               
                            </ul>
                           
                        </div>
                    </div>
                  
                    
                </div>
                
            </nav>
           
        </header>
    );

}