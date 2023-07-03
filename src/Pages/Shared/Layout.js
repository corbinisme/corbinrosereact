import { Outlet, Link } from "react-router-dom";

function Layout(){

    return(
        <div className="page-wrapper">
            <header>
                <nav>
                    Header
                </nav>
            </header>
            <main>
                <Outlet props={"prop"} />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Layout();