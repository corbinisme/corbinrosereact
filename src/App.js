import MapComponent from "./Components/MapComponent";
import Layout from "./Pages/Shared/Layout";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Web from "./Pages/Web";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

function App() {

  const [page,setPage] = useState("web");

  const menu = [
    //{url: "/", name: "Home"},
    {url: "/photo", name: "Photo", el: <NotFound />},
    {url: "/web", name: "Web", el: <Web />},
    {url: "/art", name: "Art", el: <NotFound />},
    {url: "/music", name: "Music", el: <NotFound />},
    {url: "/video", name: "Video", el: <NotFound />},
    {url: "/projects", name: "Projects", el: <Projects />},
    {url: "/blog", name: "Blog", el: <NotFound />},

  ]

  const changePage = (e)=> {

    console.log(e);
    setPage(e)
  }
  

  return (
    <div className="corbinrose-app layout-wrapper d-flex flex-column h-100">

      <BrowserRouter basename="/">
      <Header menu={menu} page={page} changePage={changePage} />
    
      <main className="mt-10 flex-shrink-0">
        
            <Routes>
              {menu.map(routes=>{

                return(
                  <Route key={routes.url} path={routes.url} name={routes.name} element={routes.el} />
                )
              })}
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Web />} />
              <Route path="/map" element={<MapComponent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        
      </main>
      <Footer page={page} />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
