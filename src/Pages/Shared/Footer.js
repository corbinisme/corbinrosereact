import Navigation from "./Navigation";

function Footer(props){

    return(
        <footer className="footer bg-light mt-auto py-3 bg-light">
            <div className="container">
                <div className="pb-4 pt-4">
                    Footer
                    <br />
                    <Navigation menu={props.menu} navclass="navbar-nav" page={props.page} changePage={props.changePage} />
                </div>
            </div>
        </footer>
    )
}
export default Footer;