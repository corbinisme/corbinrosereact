import Navigation from "./Navigation";

function Sidebar(props){

    return (
        <aside>
            <h2>Men-You</h2> 
            {props.page}
            <div className="widget-box card">
                <span className="right konami card-header">
                    ↑ ↑ ↓ ↓ ← → ← → B A
                </span>
            </div>
            <hr />
            <Navigation menu={props.menu} page={props.page} changePage={props.changePage} />
                

        </aside>
    )
}

export default Sidebar;