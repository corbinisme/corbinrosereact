import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

export default function Navigation (props){

    const pathname=""; 
    const changePage = props.changePage
    
    
    /*
    useEffect(() => {
        // code to run on component mount
            const thisPageItem = (menu? menu.filter(t=>t.attributes.url==location.pathname): []);
            setThisPage(thisPageItem);
            
    }, [menu]);
    */


    return (
       
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {props.menu.map(item=>{

                return(
                 <li className={`nav-item ${(props.page==item.url? "active": "")}`} key={item.name}>
                    <Link 
                        to={item.url}
                        onClick={()=>{props.changePage(item.url)}}
                        className={`nav-link ${(props.page==item.url? "active": "")}`} >
                        {item.name}
                    </Link>
                </li>
                )
            })}
            
        </ul>
              
       
    );

}