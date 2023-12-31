import MapComponent from "./Components/MapComponent";
import Layout from "./Pages/Shared/Layout";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Sidebar from "./Pages/Shared/Sidebar";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Web from "./Pages/Web";
import Video from "./Pages/Video";
import Home from "./Pages/Home";
import Hero from "./Pages/Shared/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import {useEffect, useState} from  "react";
import {
  Routes, 
  Route, 
  Link,
  useLocation,
  useNavigate,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import {Row, Col} from "reactstrap";

function App() {

  const [page,setPage] = useState("/");

  const changePage = (e)=> {

    console.log(e);
    setPage(e)
  }
  
  const menu = [
    //{url: "/", name: "Home"},
    {url: "/web", name: "Web", el: <Web />},
    {url: "/photo", name: "Photo", el: <NotFound />},
    
    {url: "/art", name: "Art", el: <NotFound />},
    {url: "/music", name: "Music", el: <NotFound />},
    {url: "/video", name: "Video", el: <Video />},
    {url: "/projects", name: "Projects", el: <Projects />},
    {url: "/blog", name: "Blog", el: <NotFound />},

  ]


  const mainColumn = (page=="/"?12:9);
  const subColumn = (page=="/"?12:3)
  const pageClass = (page=="/"? "page-home": `page-${page.replace("/","")}`)

  return (
    <div className={`corbinrose-app layout-wrapper d-flex flex-column h-100 ${pageClass}`} data-page={page}>

      <BrowserRouter basename="/">
      <Header menu={menu} page={page} changePage={changePage} />
    
      <Hero page={page} title={(page=="/"?"Corbinrose": page.replace("/","").toUpperCase())} />
      <main className="flex-shrink-0 pb-5 main-content">
          
          <div className={`container ${pageClass}-container`}>
          <Row>
            <Col md={mainColumn} className="main-column">

           
            <Routes>
              {menu.map(routes=>{

                return(
                  <Route key={routes.url}>
                    <Route  path={routes.url} name={routes.name} element={routes.el} />
                    <Route  path={routes.url + "/:id"} name={routes.name} element={routes.el} />
                  </Route>
                )
              })}
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Web />} />
              <Route path="/map" element={<MapComponent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            </Col>
            <div className={`col col-md-${subColumn}`}>
              <Sidebar page={page} menu={menu} changePage={changePage} />
            </div>
          </Row>
          </div>
        
      </main>
      <Footer page={page} menu={menu} changePage={changePage} />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
